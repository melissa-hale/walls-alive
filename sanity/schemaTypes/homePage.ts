import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Professional Wallpaper Installation'
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'stats',
      title: 'Trust/Stats Bar',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', type: 'string', title: 'Value (e.g. 40+)' },
          { name: 'label', type: 'string', title: 'Label (e.g. Years Experience)' }
        ]
      }]
    }),
    defineField({
      name: 'services',
      title: 'Services Preview (Home)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text', rows: 3 },
          { 
            name: 'icon', 
            type: 'string', 
            options: {
              list: [
                { title: 'Star', value: 'star' },
                { title: 'Pen Tool', value: 'pen-tool' },
                { title: 'Check Circle', value: 'check-circle' }
              ]
            }
          }
        ]
      }]
    }),
    defineField({
      name: 'serviceArea',
      title: 'Service Area Cities',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ],
})