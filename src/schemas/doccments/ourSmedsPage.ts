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
      description:"Banner principal da página.Resolução e aspecto minimos esperados 1280x480",
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule
             .custom(validateImageInput({ minWidth:1280, aspectRatio: 2.67 }))
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
