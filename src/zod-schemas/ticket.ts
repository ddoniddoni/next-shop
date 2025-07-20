import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { tickets } from "@/db/schema";
import { z } from "zod";

export const insertTicketSchema = createInsertSchema(tickets, {
  id: (field) => z.union([z.number(), z.literal("(New)")]),
  title: (field) => field.min(1, "Title is required"),
  description: (field) => field.min(1, "Description is required"),
  tech: (field) => field.email("Invalid email address"),
});

export const selectTicketSchema = createSelectSchema(tickets);

// ✅ 타입 정의는 z.infer 사용
export type insertTicketSchemaType = z.infer<typeof insertTicketSchema>;
export type selectTicketSchemaType = z.infer<typeof selectTicketSchema>;
