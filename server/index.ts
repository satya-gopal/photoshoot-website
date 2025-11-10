import express from 'express';
import cors from 'cors';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import path from 'path';
import { db } from './db';
import { admins, sections, images } from './schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const app = express();
const PORT = 3001;

const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

app.use(cors({
  origin: 'http://localhost:5000',
  credentials: true,
}));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'photography-secret-key-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: false,
    },
  })
);

declare module 'express-session' {
  interface SessionData {
    adminId?: number;
  }
}

const requireAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (!req.session.adminId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    const [admin] = await db.select().from(admins).where(eq(admins.username, username));

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, admin.password);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    req.session.adminId = admin.id;
    res.json({ message: 'Login successful', admin: { id: admin.id, username: admin.username } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ message: 'Logout successful' });
  });
});

app.get('/api/auth/check', (req, res) => {
  if (req.session.adminId) {
    res.json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
});

app.get('/api/sections', async (req, res) => {
  try {
    const { published } = req.query;
    let query = db.select().from(sections);
    
    if (published === 'true') {
      query = query.where(eq(sections.isPublished, true)) as any;
    }
    
    const allSections = await query;
    res.json(allSections);
  } catch (error) {
    console.error('Error fetching sections:', error);
    res.status(500).json({ error: 'Failed to fetch sections' });
  }
});

app.get('/api/sections/:id', async (req, res) => {
  try {
    const [section] = await db.select().from(sections).where(eq(sections.id, parseInt(req.params.id)));
    
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }
    
    res.json(section);
  } catch (error) {
    console.error('Error fetching section:', error);
    res.status(500).json({ error: 'Failed to fetch section' });
  }
});

app.put('/api/sections/:id', requireAuth, async (req, res) => {
  try {
    const { title, description, content, isPublished } = req.body;
    const sectionId = parseInt(req.params.id);

    const [updatedSection] = await db
      .update(sections)
      .set({
        title,
        description,
        content,
        isPublished,
        updatedAt: new Date(),
      })
      .where(eq(sections.id, sectionId))
      .returning();

    res.json(updatedSection);
  } catch (error) {
    console.error('Error updating section:', error);
    res.status(500).json({ error: 'Failed to update section' });
  }
});

app.post('/api/sections', requireAuth, async (req, res) => {
  try {
    const { page, sectionKey, title, description, content } = req.body;

    const [newSection] = await db
      .insert(sections)
      .values({
        page,
        sectionKey,
        title,
        description,
        content,
        isPublished: false,
      })
      .returning();

    res.json(newSection);
  } catch (error) {
    console.error('Error creating section:', error);
    res.status(500).json({ error: 'Failed to create section' });
  }
});

app.get('/api/images', async (req, res) => {
  try {
    const { published } = req.query;
    let query = db.select().from(images);
    
    if (published === 'true') {
      query = query.where(eq(images.isPublished, true)) as any;
    }
    
    const allImages = await query;
    res.json(allImages);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

app.post('/api/images/upload', requireAuth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { imageKey, sectionId, altText } = req.body;
    const imagePath = `/uploads/${req.file.filename}`;

    const [newImage] = await db
      .insert(images)
      .values({
        imageKey,
        sectionId: sectionId ? parseInt(sectionId) : null,
        imagePath,
        altText: altText || '',
        isPublished: false,
      })
      .returning();

    res.json(newImage);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

app.put('/api/images/:id', requireAuth, async (req, res) => {
  try {
    const { altText, isPublished, order } = req.body;
    const imageId = parseInt(req.params.id);

    const [updatedImage] = await db
      .update(images)
      .set({
        altText,
        isPublished,
        order,
        updatedAt: new Date(),
      })
      .where(eq(images.id, imageId))
      .returning();

    res.json(updatedImage);
  } catch (error) {
    console.error('Error updating image:', error);
    res.status(500).json({ error: 'Failed to update image' });
  }
});

app.delete('/api/images/:id', requireAuth, async (req, res) => {
  try {
    const imageId = parseInt(req.params.id);
    const [image] = await db.select().from(images).where(eq(images.id, imageId));
    
    if (image) {
      const filePath = path.join(process.cwd(), 'public', image.imagePath);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    
    await db.delete(images).where(eq(images.id, imageId));
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

app.listen(PORT, 'localhost', () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
