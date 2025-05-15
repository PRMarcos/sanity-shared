import { defineType, defineField } from "sanity";
import { validateImageInput } from '../../utils/validateImageInput';
export default defineType({
    name: "homePage",
    title: "Página Home",
    type: "document",
    fields: [
        defineField({
            name: "heroHeadline",
            title: "HeadLine sessão Hero",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [{ title: 'Negrito', value: 'strong' }],
                        annotations: []
                    }
                }
            ]
        }),
        defineField({
            name: "heroDescription",
            title: "Texto da sessão Hero",
            type: "text",
        }),
        defineField({
            name: "heroButtonTitle",
            title: "Texto CTA sessão Hero",
            type: "string"
        }),
        defineField({
            name: "heroButtonLink",
            title: "Link CTA sessão Hero",
            description: "Pode ser o caminho relativo para uma pagina como: /events ou uma url padrão: https://www.google.com.br",
            type: "string"
        }),
        defineField({
            name: "heroImage",
            title: "Imagem da sessão Hero",
            type: "image",
            validation: Rule => Rule
                .custom(validateImageInput({ maxWidth: 2000, })),
        }),
        defineField({
            name: "dividerText",
            title: "Texto Divisor de sessão",
            type: "array",
            validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
            of: [
                {
                    type: "block",
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [{ title: 'Negrito', value: 'strong' }],
                        annotations: []
                    }
                }
            ]
        }),
        defineField({
            name: 'titleLive',
            title: 'Título Sessão Live',
            type: 'string',
            validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
        }),
        defineField({
            name: 'descriptionLive',
            title: 'Descrição Sessão Live',
            type: 'array',
            validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
            of: [
                {
                    type: "block",
                }
            ]
        }),
        defineField({
            name: 'youtubeUrl',
            title: 'URL da Transmissão (YouTube)',
            type: 'url',
            validation: (Rule) => Rule.uri({ scheme: ['https'] }),
        }),
        defineField({
            name: 'buttonLiveText',
            title: 'Botão Sessão Live',
            validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
            type: 'string',
        }),
        defineField({
            name: 'butonLiveLink',
            title: 'Link Botão Sessão Live',
            type: 'url',
            validation: (Rule) => Rule.required().error('Esse é um campo obrigatório.')
                .uri({ scheme: ['https'] }),
        }),
        defineField({
            name: 'liveBannerImage',
            title: 'Banner Sessão Live',
            type: 'image',
            validation: Rule => Rule
                .custom(validateImageInput({ maxHeight: 600 })),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Página Home",
            };
        },
    },
});
