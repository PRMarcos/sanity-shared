import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sermonSummary',
  title: 'Cadastro de Resumos das Palavras',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: Rule => Rule.required() }),
  ],
})