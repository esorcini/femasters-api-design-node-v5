import { users, habits, entries, tags, habitTags } from "./model.ts";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export type User = typeof users.$inferSelect;
export type Habit = typeof habits.$inferSelect;
export type Entry = typeof entries.$inferSelect;
export type Tag = typeof tags.$inferSelect;
export type HabitTag = typeof habitTags.$inferSelect;

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
