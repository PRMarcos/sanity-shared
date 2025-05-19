import { defineType, defineField } from 'sanity'
import { richText } from '../../utils'

export default defineType({
  name: 'sermonSummary',
  title: 'Cadastro de Resumos das Palavras',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Data',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sermonTag' }] }],
      validation: Rule =>
        Rule.required()
          .min(1)
          .error('Adicione pelo menos uma tag.'),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Link do vídeo / Palavra completa',
      type: 'url',
      validation: Rule => Rule
        .uri({ scheme: ['http', 'https'] })
        .required()
    }),
    defineField({
      name: 'speaker',
      title: 'Palestrante',
      type: 'reference',
      to: [{ type: 'person' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Imagem de fundo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      ...richText({
        name:"content",
        title:"Resumo"
      }),
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'backgroundImage',
    },
    prepare({ title, subtitle, media }) {
      const date = subtitle ? new Date(subtitle) : null

      const formattedDate = date
        ? `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}/${date.getFullYear()}`
        : 'Data não definida'

      return {
        title,
        subtitle: formattedDate,
        media,
      }
    },
  }
  ,
})
