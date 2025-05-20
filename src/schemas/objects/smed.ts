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
      description:"Imagem para ser usada como fundo nos cards de apresentação, resolução e aspecto minimos esperados 264x400",
      type: 'image',
      validation: Rule => Rule
      .custom(validateImageInput({ minWidth:264, aspectRatio: 0.66 }))
      .required()
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'banner',
    },
  },
});
