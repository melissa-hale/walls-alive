import { type SchemaTypeDefinition } from 'sanity'
import homePage from './homePage'
import aboutPage from './aboutPage'
import servicesPage from './servicesPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, aboutPage, servicesPage],
}