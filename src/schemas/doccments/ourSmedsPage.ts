import { defineType, defineField} from 'sanity'
import { richText, validateImageInput } from '../../utils'


export default defineType({
  name: 'ourSmedsPage',
  title: 'Página Nossos SMEDS',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Imagem de banner',
      description:"Aspecto da imagem 2x1, resolução esperada 2000x1000",
      type: 'image',
      validation: Rule => Rule
              .custom(validateImageInput({ maxHeight: 1000, maxWidth: 2000, aspectRatio: 2 }))
              .required()
    }),
    defineField({
      ...richText({
        name: 'description',
        title: 'Descrição geral dos SMEDs',
      }),
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name:"smedlist",
      title:"Lista dos smeds",
      type:"array",
      of: [{ type: 'reference', to: [{ type: 'smed' }] }],
       validation: Rule => Rule.required().min(1).error('Adicione ao menos um item.'),
    }),
    defineField({
      ...richText({
        name: 'conclusion',
        title: 'Conclusão da Pagina SMEDs'}),
        validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
      }),
  ],
   preview: {
    prepare() {
      return {
        title: "Página Nosos SMEDS",
      };
    },
  },
})
