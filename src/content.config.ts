import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const bio = defineCollection({
    loader: glob({ pattern: "bio.md", base: "./src/content" }),
    schema: z.object({
        name: z.string(),
        avatar: z.string().optional(),
        institution: z.string().optional(),
    }),
});

const cv = defineCollection({
    loader: glob({ pattern: "cv.md", base: "./src/content" }),
    schema: z.object({
        name: z.string(),
        title: z.string(),
        pdfUrl: z.string().regex(/^(\/(?!\/)|https:\/\/)/, "Use a root-relative path or HTTPS URL").optional(),
    }),
});

export const collections = { bio, cv };
