import { defineType } from 'sanity';

export default defineType({
  name: 'bannerCard',
  title: 'Car Rental Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the car rental section',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description for the car rental section',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'The text to display on the button',
    },
    {
      name: 'carImage',
      title: 'Car Image',
      type: 'image',
      description: 'The image of the car to display',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'The background image for this section',
      options: {
        hotspot: true,
      },
    },
  ],
});