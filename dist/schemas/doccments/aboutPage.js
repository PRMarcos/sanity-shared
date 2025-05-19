import { defineType, defineField } from 'sanity';
import { validateImageInput } from '../../utils';
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
            description: "Aspecto da imagem 2x1, resolução máxima esperada 2000x1000",
            type: 'image',
            validation: Rule => Rule.required().error('Esse é um campo obrigatório.')
                .custom(validateImageInput({ maxHeight: 1000, maxWidth: 2000, aspectRatio: 2 })),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Página Sobre",
            };
        },
    },
});
