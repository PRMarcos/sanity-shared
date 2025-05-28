import { defineType, defineField } from 'sanity';
import { validateImageInput } from '../../utils';
export default defineType({
    name: 'eventsPage',
    title: 'Página Eventos',
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
            description: "Banner principal da página.Resolução e aspecto minimos esperados 1280x480",
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule
                .custom(validateImageInput({ minWidth: 1280, aspectRatio: 2.67 }))
                .required()
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Página de Eventos",
            };
        },
    },
});
