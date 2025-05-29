
import { defineType, defineField } from "sanity"
import { styledText, validateImageInput } from '../../utils'
import { simpleText } from "../../utils";

export default defineType({
  name: "homePage",
  title: "Página Home",
  type: "document",
  fields: [
    defineField({
      ...simpleText({
        name: "heroHeadline",
        title: "HeadLine sessão Hero"
      }),
    }),
    defineField({
      ...styledText({
        name: "heroDescription",
        title: "Texto da sessão Hero"
      }),
    }),
    defineField({
      name: "heroButtonTitle",
      title: "Texto CTA sessão Hero",
      type: "string"
    }),
    defineField({
      name: "heroButtonLink",
      title: "Link CTA sessão Hero",
      description: "Pode ser o caminho relativo para uma pagina como: /events ou uma url padrão: https://www.google.com.br",
      type: "string"
    }),
    defineField({
      name: "heroImage",
      title: "Imagem da sessão Hero",
      type: "image",
      validation: Rule => Rule
        .custom(validateImageInput({ maxWidth: 2000, })),
    }),
    defineField({
      name: "eventList",
      title: "Eventos que aparecem na home",
      description: "Escolha entre eventos cadastrados. Apenas eventos ativos aparecerão aqui.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "event" }],
          options: {
            filter: 'isActive == true',
          },
        },
      ],
      validation: Rule =>
        Rule.required()
          .min(3)
          .max(3)
          .custom((items) => {
            if (!Array.isArray(items)) return true

            const ids = (items as { _ref: string }[]).map(item => item._ref)
            const hasDuplicates = new Set(ids).size !== ids.length

            return hasDuplicates ? 'Não é permitido repetir eventos.' : true
          })
          .error('Esse é um campo obrigatório e deve conter 3 eventos únicos.'),
    }),
    defineField({
      ...simpleText({
        name: "dividerText",
        title: "Texto Divisor de sessão"
      }),
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'titleLive',
      title: 'Título Sessão Live',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      ...simpleText({
        name: 'descriptionLive',
        title: 'Descrição Sessão Live',
      }),
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'URL da Transmissão (YouTube)',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'buttonLiveText',
      title: 'Botão Sessão Live',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
      type: 'string',
    }),
    defineField({
      name: 'butonLiveLink',
      title: 'Link Botão Sessão Live',
      type: 'url',
      validation: (Rule) =>
        Rule.required().error('Esse é um campo obrigatório.')
          .uri({ scheme: ['https'] }),

    }),
    defineField({
      name: 'liveBannerImage',
      title: 'Banner Sessão Live',
      description: "Banner da sessão de live. Resolução e aspecto minimos esperados 177x342",
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule
        .custom(validateImageInput({ minHeight: 342 })),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Página Home",
      };
    },
  },
})