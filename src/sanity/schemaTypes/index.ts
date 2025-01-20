import { type SchemaTypeDefinition } from 'sanity'
import bannerCard from './bannerCard'
import productCard from './productCard'
import cars from './cars'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bannerCard, productCard, cars],
}
