import { defineType, defineField } from 'sanity'

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
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().error('O título é obrigatório.'),
    }),
    defineField({
      name: 'descricaoCurta',
      title: 'Descrição Curta',
      type: 'text',
      validation: Rule => Rule.required().error('A descrição curta é obrigatória.'),
    }),
    defineField({
      name: 'sobre',
      title: 'Sobre o Evento',
      type: 'text',
      validation: Rule => Rule.required().error('O campo "Sobre o Evento" é obrigatório.'),
    }),
    defineField({
      name: 'programacao',
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
      name: 'local',
      title: 'Local (Endereço)',
      type: 'string',
      validation: Rule => Rule.required().error('O local do evento é obrigatório.'),
    }),
    defineField({
      name: 'corEvento',
      title: 'Cor do Evento',
      type: 'color',
      options: {
        colorFormat: 'hex',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'teaser',
      title: 'Teaser (Vídeo)',
      type: 'url',
    }),
    defineField({
      name: 'palestrantes',
      title: 'Palestrantes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      validation: Rule =>
        Rule.required()
          .min(1)
          .error('Adicione pelo menos um palestrante.'),
    }),
    defineField({
      name: 'organizador',
      title: 'Organizador',
      type: 'object',
      validation: Rule => Rule.required().error('As informações do organizador são obrigatórias.'),
      fields: [
        defineField({
          name: 'descricao',
          title: 'Descrição do Organizador',
          type: 'string',
        }),
        {
          name: 'telefone',
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
          validation: Rule => Rule.required(),
        },
      ],
    }),
  ],
})
