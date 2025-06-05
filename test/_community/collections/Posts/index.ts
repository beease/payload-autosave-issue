import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data, req }) => {
        // This is a placeholder URL for simulating a live preview.
        const path = 'https://beease.fr'

        return path
      },
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'checkbox',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'conditionalField',
      type: 'text',
      admin: {
        condition: (_, { checkbox }) => checkbox,
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 50,
  },
}
