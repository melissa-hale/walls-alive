import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Services & Expertise'
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text'
    }),
    defineField({
      name: 'mainServices',
      title: 'Main Services List',
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
                { title: 'Home', value: 'home' },
                { title: 'Building', value: 'building-2' },
                { title: 'Sparkles', value: 'sparkles' },
                { title: 'Paint Roller', value: 'paint-roller' }
              ]
            }
          },
          {
            name: 'features',
            title: 'Feature Bullets',
            type: 'array',
            of: [{ type: 'string' }]
          }
        ]
      }]
    }),
    defineField({
      name: 'materialsTitle',
      title: 'Materials Section Title',
      type: 'string',
      initialValue: "I Don't Sell Paper, I Make It Look Perfect."
    }),
    defineField({
      name: 'materialsBody',
      title: 'Materials Section Body',
      type: 'text'
    }),
    defineField({
      name: 'designersList',
      title: 'Working With Designers List',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ]
})