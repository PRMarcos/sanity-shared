import { defineType, defineField } from 'sanity'
import { validateImageInput, simpleText } from '../../utils'

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
      description: "Imagem para ser usada como fundo nos cards de apresentação, resolução e aspecto minimos esperados 264x400",
      type: 'image',
      validation: Rule => Rule
        .custom(validateImageInput({ minWidth: 264, aspectRatio: 0.66 }))
        .required()
    }),
    defineField({
      ...simpleText({
        name: "smedDescription",
        title: "Descrição do Semd"
      }),
      validation: Rule => Rule.required().error('A descrição é obrigatória.'),
    }),
    defineField({
      title: "CTA SMED",
      description: "O botão abaixo da descrição do Smed, caso queira remover é só deixar em branco",
      name: "smedButton",
      type: "object",
      fields: [
        {
          name: 'contentButton',
          description: "O titulo do botão",
          title: 'Título',
          type: 'string',
        },
        {
          name: 'linktButton',
          description: "O link do botão, Caminho relativo como /events ou uma URL como https://google.com",
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required().error('Esse campo é obrigatório.'),
        },
      ]
    }),


  ],
  preview: {
    select: {
      title: 'title',
      media: 'banner',
    },
  },
});
