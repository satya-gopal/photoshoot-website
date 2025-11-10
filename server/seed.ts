import bcrypt from 'bcryptjs';
import { db } from './db';
import { admins, sections, images } from './schema';

async function seed() {
  try {
    console.log('Seeding database...');

    const hashedPassword = await bcrypt.hash('admin123', 10);
    await db.insert(admins).values({
      username: 'admin',
      password: hashedPassword,
    }).onConflictDoNothing();

    console.log('✅ Admin user created (username: admin, password: admin123)');

    const sectionData = [
      {
        page: 'home',
        sectionKey: 'hero',
        title: 'Baby Shooting Zone',
        description: 'Where Little Moments become Lifelong Memories',
        content: null,
        isPublished: true,
      },
      {
        page: 'home',
        sectionKey: 'services',
        title: 'Photography Services',
        description: 'Capturing your precious moments with professional care',
        content: null,
        isPublished: true,
      },
      {
        page: 'home',
        sectionKey: 'baby_shoot',
        title: 'Baby Photography',
        description: 'Precious moments with your little one',
        content: null,
        isPublished: true,
      },
      {
        page: 'home',
        sectionKey: 'maternity',
        title: 'Maternity Shoot',
        description: 'Celebrate the journey of motherhood',
        content: null,
        isPublished: true,
      },
      {
        page: 'home',
        sectionKey: 'newborn',
        title: 'Newborn Photography',
        description: 'First moments captured forever',
        content: null,
        isPublished: true,
      },
      {
        page: 'home',
        sectionKey: 'model_shoot',
        title: 'Model Photography',
        description: 'Professional model portfolio shoots',
        content: null,
        isPublished: true,
      },
      {
        page: 'home',
        sectionKey: 'wedding',
        title: 'Wedding Photography',
        description: 'Your special day, beautifully captured',
        content: null,
        isPublished: true,
      },
      {
        page: 'home',
        sectionKey: 'birthday',
        title: 'Birthday Photography',
        description: 'Celebrate milestones with beautiful photos',
        content: null,
        isPublished: true,
      },
    ];

    for (const section of sectionData) {
      await db.insert(sections).values(section).onConflictDoNothing();
    }

    console.log('✅ Sections seeded');
    console.log('\n🎉 Database seeded successfully!');
    console.log('Login credentials:');
    console.log('Username: admin');
    console.log('Password: admin123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
