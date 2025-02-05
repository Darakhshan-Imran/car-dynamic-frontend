import { type SchemaTypeDefinition } from 'sanity'
import bannerCard from './bannerCard'
import cars from './cars'
import carRentalForm from './bookingForm'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bannerCard, cars, carRentalForm],
}
