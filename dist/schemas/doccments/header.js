import { defineType, defineField } from 'sanity';
import { validateImageInput } from '../../utils';
export default defineType({
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        defineField({
            name: 'items',
            title: 'Links do Menu',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            title: 'Título',
                            description: "Nome que vai aparecer na barra de navegação",
                            type: 'string',
                            validation: Rule => Rule.required().error('Esse campo é obrigatório.'),
                        },
                        {
                            name: 'link',
                            title: 'Link',
                            description: "Caminho relativo como /events ou uma URL como https://google.com",
                            type: 'string',
                            validation: Rule => Rule.required().error('Esse campo é obrigatório.'),
                        },
                    ],
                }
            ],
            validation: Rule => Rule.required().min(1).error('Adicione ao menos um item no menu.'),
        }),
        defineField({
            name: 'icon',
            title: 'Ícone do header',
            description: "Imagem de icone do header. Precisa ser no maximo 100x100 e precisa ser uma imagem quadrada",
            type: 'image',
            options: {
                hotspot: false,
            },
            validation: Rule => Rule.required()
                .custom(validateImageInput({ maxHeight: 100, maxWidth: 100, aspectRatio: 1 })),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Header",
            };
        },
    },
});
