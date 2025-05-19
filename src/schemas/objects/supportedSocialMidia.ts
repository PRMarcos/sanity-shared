import { defineType, defineField } from 'sanity'
import { validateImageInput } from '../../utils'

export default defineType({
  name: 'supportedSocialMidia',
  title: 'Cadsatro de Mídias Sociais',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required()
        .regex(/^[a-z0-9]+$/, {
          name: 'slug',
          invert: false,
        })
        .error('Use apenas letras minúsculas e números, sem espaços. Ex: instagram, linkedin'),
    }),
    defineField({
      name: 'icon',
      title: 'Ícone',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.')
              .custom(validateImageInput({ maxHeight: 100, aspectRatio: 1 })),
    }),
  ],
})
