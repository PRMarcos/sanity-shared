import { defineType, defineField } from 'sanity';
import { richText, validateImageInput } from '../../utils';
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
            description: "Aspecto da imagem 2x1, resolução esperada 2000x1000",
            type: 'image',
            validation: Rule => Rule.required().error('Esse é um campo obrigatório.')
                .custom(validateImageInput({ maxHeight: 1000, maxWidth: 2000, aspectRatio: 2 })),
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
                title: 'Conclusão da Pagina SMEDs'
            }),
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
});
