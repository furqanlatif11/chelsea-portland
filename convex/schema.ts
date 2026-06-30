import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  services: defineTable({
    title: v.string(),

    description: v.array(v.string()),

    thumbnail: v.optional(v.id("_storage")),

    altText: v.string(),

    createdAt: v.number(),

    updatedAt: v.number(),
  }),

  caseStudies: defineTable({
    title: v.string(),

    sectionTitle: v.string(),

    description: v.string(),

    thumbnail: v.optional(v.id("_storage")),

    altText: v.string(),

    createdBy: v.optional(v.string()),

    publishedDate: v.number(),

    createdAt: v.number(),

    updatedAt: v.number(),
  }),
});
