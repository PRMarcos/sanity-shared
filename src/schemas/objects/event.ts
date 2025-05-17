import { defineType, defineField } from 'sanity'
import { richTextField, richTextFieldSimple } from '../../utils'

export default defineType({
  name: 'event',
  title: 'Cadastro de Evento',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerDesktop',
      title: 'Banner (Desktop)',
      type: 'image',
      validation: Rule => Rule.required().error('O banner para desktop é obrigatório.'),
    }),
    defineField({
      name: 'bannerMobile',
      title: 'Banner (Mobile)',
      type: 'image',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().error('O título é obrigatório.'),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descrição Curta',
      ...richTextFieldSimple,
      validation: Rule => Rule.required().error('A descrição curta é obrigatória.'),
    }),
    defineField({
      name: 'about',
      title: 'Sobre o Evento',
      ...richTextField
    }),
    defineField({
      name: 'schedule',
      title: 'Programação',
      type: 'object',
      fields: [
        defineField({ name: 'dataInicio', title: 'Data de Início', type: 'date' }),
        defineField({ name: 'dataFim', title: 'Data de Fim', type: 'date' }),
        defineField({ name: 'horaInicio', title: 'Hora de Início', type: 'string' }),
        defineField({ name: 'horaFim', title: 'Hora de Fim', type: 'string' }),
      ],
      validation: Rule => Rule.required().error('A programação do evento é obrigatória.'),
    }),
    defineField({
      name: 'address',
      title: 'Local (Endereço)',
      type: 'reference',
          to: [{ type: 'address' }],
      validation: Rule => Rule.required().error('O local do evento é obrigatório.'),
    }),
    
    defineField({
      name: 'eventColor',
      title: 'Cor do Evento',
      type: 'color',
      options: {
        colorFormat: 'hex',
      },
    }),
    defineField({
      name: 'teaser',
      title: 'Teaser (Vídeo)',
      type: 'url',
    }),
    defineField({
      name: 'speakers',
      title: 'Palestrantes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'organizer',
      title: 'Organizador',
      type: 'object',
      validation: Rule => Rule.required().error('As informações do organizador são obrigatórias.'),
      fields: [
        defineField({
          name: 'description',
          title: 'Descrição do Organizador',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        {
          name: 'phone',
          type: 'reference',
          to: [{ type: 'phoneEntry' }],
          title: 'Telefone',
          validation: Rule => Rule.required(),
        },
        {
          name: 'email',
          type: 'reference',
          to: [{ type: 'emailEntry' }],
          title: 'Email',
        },
      ],
    }),
  ],
})
