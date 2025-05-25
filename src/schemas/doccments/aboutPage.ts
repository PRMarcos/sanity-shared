import { defineType, defineField} from 'sanity'
import { validateImageInput } from '../../utils'

export default defineType({
  name: 'aboutPage',
  title: 'Página Sobre',
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
      validation: Rule => Rule
            .custom(validateImageInput({ minWidth:1280, aspectRatio: 2.67 }))
            .required()
      
    }),
    defineField({
      name: 'leadership',
      title: 'Nossa Liderança',
      description:"Selecionar os pastores presidentes",
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      validation: Rule =>
        Rule.required()
          .min(1)
          .error('Adicione pelo menos uma uma Pessoa.'),
    }),
  ],
   preview: {
    prepare() {
      return {
        title: "Página Sobre",
      };
    },
  },
})
