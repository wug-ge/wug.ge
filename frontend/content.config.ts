import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      // Optionally, add a schema for blog posts
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
        // Add more fields as needed
      })
    })
  }
}) 