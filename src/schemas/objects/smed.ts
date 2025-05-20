import { defineType, defineField } from 'sanity'
import { validateImageInput } from '../../utils'

export default defineType({
  name: 'smed',
  title: 'Cadastro de SMEDS',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().error("Esse é um campo obrigatório."),
    }),
    defineField({
      name: 'banner',
      title: 'Imagem Representativa do SMED',
      type: 'image',
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'banner',
    },
  },
});
