import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date().optional(),
        updateDate: z.date().optional(),
        draft: z.boolean().default(false),
        tags: z.string().array().default([]),
        category: z.string().or(z.string().array()).default([]),
        image: image()
    })
})

export const collections = { posts }