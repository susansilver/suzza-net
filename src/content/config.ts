import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		draft: z.boolean(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional(),
			heroImage: z.object({
				src: image(),
				alt: z.string(),
			  }),
		category: z.string(),
		link: z.string().optional(),
	}),
});

export const collections = { blog };
