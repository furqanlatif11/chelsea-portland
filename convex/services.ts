import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Get all services
 */
export const getServices = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("services")
      .order("desc")
      .collect();
  },
});

/**
 * Get single service by ID
 */
export const getServiceById = query({
  args: {
    id: v.id("services"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

/**
 * Create new service
 */
export const createService = mutation({
  args: {
    title: v.string(),
    description: v.array(v.string()),
    thumbnail: v.optional(v.id("_storage")),
    altText: v.string(),
  },

  handler: async (ctx, args) => {
    const now = Date.now();

    return await ctx.db.insert("services", {
      title: args.title,
      description: args.description,
      thumbnail: args.thumbnail,
      altText: args.altText,
      createdAt: now,
      updatedAt: now,
    });
  },
});

/**
 * Update existing service
 */
export const updateService = mutation({
  args: {
    id: v.id("services"),

    title: v.string(),
    description: v.array(v.string()),
    thumbnail: v.optional(v.id("_storage")),
    altText: v.string(),
  },

  handler: async (ctx, args) => {
    const { id, ...data } = args;

    const service = await ctx.db.get(id);

    if (!service) {
      throw new Error("Service not found.");
    }

    await ctx.db.patch(id, {
      ...data,
      updatedAt: Date.now(),
    });

    return id;
  },
});

/**
 * Delete service
 */
export const deleteService = mutation({
  args: {
    id: v.id("services"),
  },

  handler: async (ctx, args) => {
    const service = await ctx.db.get(args.id);

    if (!service) {
      throw new Error("Service not found.");
    }

    await ctx.db.delete(args.id);

    return {
      success: true,
      message: "Service deleted successfully.",
    };
  },
});