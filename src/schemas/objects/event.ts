import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Cadastro de Eventos',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: Rule => Rule.required() }),
  ],
})