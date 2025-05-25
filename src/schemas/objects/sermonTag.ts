import { defineType, defineField } from 'sanity'
import { slugify } from '../../utils' // vamos criar esse util abaixo

export default defineType({
  name: 'sermonTag',
  title: 'Tag de Sermão',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().error('O título é obrigatório.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: slugify,
      },
      validation: Rule => Rule.required().error('O slug é obrigatório.'),
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})

