import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Headline',
      type: 'string',
      initialValue: 'More Than Just Hanging Paper.'
    }),
    defineField({
      name: 'bio',
      title: 'Bio Text (Paragraphs)',
      type: 'array',
      of: [{ type: 'block' }] // Allows rich text editing
    }),
    defineField({
      name: 'portraitImage',
      title: 'Portrait Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text' },
          {
            name: 'icon',
            type: 'string',
            options: {
              list: [
                { title: 'Clock', value: 'clock' },
                { title: 'Heart', value: 'heart' },
                { title: 'Award', value: 'award' }
              ]
            }
          }
        ]
      }]
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'stepNumber', type: 'string', title: 'Step # (e.g. 01)' },
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text' }
        ]
      }]
    })
  ]
})