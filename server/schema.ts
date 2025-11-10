import { pgTable, text, serial, timestamp, boolean, integer } from 'drizzle-orm/pg-core';

export const admins = pgTable('admins', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const sections = pgTable('sections', {
  id: serial('id').primaryKey(),
  page: text('page').notNull(),
  sectionKey: text('section_key').notNull().unique(),
  title: text('title'),
  description: text('description'),
  content: text('content'),
  isPublished: boolean('is_published').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const images = pgTable('images', {
  id: serial('id').primaryKey(),
  sectionId: integer('section_id').references(() => sections.id),
  imageKey: text('image_key').notNull().unique(),
  imagePath: text('image_path').notNull(),
  altText: text('alt_text'),
  order: integer('order').default(0),
  isPublished: boolean('is_published').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Admin = typeof admins.$inferSelect;
export type InsertAdmin = typeof admins.$inferInsert;
export type Section = typeof sections.$inferSelect;
export type InsertSection = typeof sections.$inferInsert;
export type Image = typeof images.$inferSelect;
export type InsertImage = typeof images.$inferInsert;
