import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'address',
  title: 'Cadastro de Endereços',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Descrição', description:"Algo que descreva de quem é o endereço", type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'street', title: 'Rua', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'number', title: 'Número', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'district', title: 'Bairro', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'city', title: 'Cidade', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'state', title: 'Estado', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'zip', title: 'CEP', type: 'string', validation: Rule => Rule.required() }),
  ],
})