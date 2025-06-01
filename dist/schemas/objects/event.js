import { defineType, defineField } from 'sanity';
import { richText, simpleText, validateImageInput, validateTimeFormat } from '../../utils';
export default defineType({
    name: 'event',
    title: 'Cadastro de Evento',
    type: 'document',
    fields: [
        defineField({
            name: 'isActive',
            title: 'Evento Ativo?',
            type: 'boolean',
            initialValue: true,
            description: 'Desmarque para desativar a exibição do evento.',
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: Rule => Rule.required().error('O título é obrigatório.'),
        }),
        defineField({
            ...simpleText({
                name: "shortDescription",
                title: "Descrição Curta",
            }),
            description: "Alguns componentes podem esconder textos maiores que 150 carateres.",
            validation: Rule => Rule.required().error('A descrição curta é obrigatória.')
                .max(160).warning('Limite de 200 caracteres.'),
        }),
        defineField({
            name: 'banner',
            title: 'Banner (Desktop)',
            description: "Banner principal do evento, vai ser usado como capa principal no desktop. resolução e aspecto minimo esperado 1280x480",
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
                .custom(validateImageInput({ minWidth: 1280, aspectRatio: 2.67 }))
        }),
        defineField({
            name: 'bannerMobile',
            title: 'Banner (Mobile)',
            description: "Banner principal do evento, vai ser usado como capa principal no mobile. resolução e aspecto minimo esperado 375x400",
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule
                .custom(validateImageInput({ minWidth: 375, aspectRatio: 0.9375 }))
        }),
        defineField({
            name: 'background',
            description: "Imagem que serve de fundo para os cards do evento, resolução minima e aspecto esperado 508x400  ",
            title: 'Imagem de fundo para o evento',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
                .custom(validateImageInput({ minWidth: 508, aspectRatio: 1.27 }))
        }),
        defineField({
            ...richText({
                name: "about",
                title: "Sobre o Evento"
            }),
            validation: Rule => Rule.required().error('A descrição é obrigatória.'),
        }),
        defineField({
            name: 'schedule',
            title: 'Programação do Evento',
            type: 'array',
            validation: Rule => Rule.required().min(1),
            of: [
                defineField({
                    name: 'daySchedule',
                    title: 'Dia da Programação',
                    type: 'object',
                    validation: Rule => Rule.required(),
                    fields: [
                        defineField({
                            name: 'date',
                            title: 'Data',
                            type: 'date',
                            validation: Rule => Rule.required(),
                        }),
                        defineField({
                            name: 'sessions',
                            title: 'Programação:',
                            description: "Cadastre pelo menos uma programação com titulo, hora e data",
                            type: 'array',
                            validation: Rule => Rule.required().min(1),
                            of: [
                                defineField({
                                    name: 'session',
                                    title: 'Sessão',
                                    type: 'object',
                                    fields: [
                                        { name: 'title', title: 'Título', type: 'string', validation: Rule => Rule.required() },
                                        { ...simpleText({ name: "description", title: "Descrição", }), },
                                        { name: 'starTime', title: 'Horário Inicio', type: 'string', validation: validateTimeFormat, },
                                        { name: 'endTime', title: 'Horário Final', type: 'string', validation: validateTimeFormat, },
                                    ],
                                }),
                            ],
                        }),
                    ],
                    preview: {
                        select: {
                            showDate: 'date',
                        },
                        prepare(selection) {
                            const { showDate } = selection;
                            const formattedDate = showDate
                                ? new Date(showDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                                : 'Sem data definida';
                            return {
                                title: formattedDate,
                            };
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: 'address',
            title: 'Local (Endereço)',
            type: 'reference',
            to: [{ type: 'address' }],
            validation: Rule => Rule.required().error('O local do evento é obrigatório.'),
        }),
        defineField({
            name: 'eventColor',
            title: 'Cor do Evento',
            type: 'color',
            options: {
                colorFormat: 'hex',
            },
        }),
        defineField({
            name: 'teaser',
            title: 'Teaser (Vídeo)',
            type: 'url',
        }),
        defineField({
            name: 'speakers',
            title: 'Palestrantes',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'person' }] }],
        }),
        defineField({
            name: 'organizer',
            title: 'Organizador',
            type: 'object',
            validation: Rule => Rule.required().error('As informações do organizador são obrigatórias.'),
            fields: [
                defineField({
                    name: 'description',
                    title: 'Descrição do Organizador',
                    type: 'string',
                    validation: Rule => Rule.required()
                }),
                {
                    name: 'phone',
                    type: 'reference',
                    to: [{ type: 'phoneEntry' }],
                    title: 'Telefone',
                    validation: Rule => Rule.required(),
                },
                {
                    name: 'email',
                    type: 'reference',
                    to: [{ type: 'emailEntry' }],
                    title: 'Email',
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'bannerDesktop',
            firstDay: 'schedule.0.date',
        },
        prepare(selection) {
            const { title, media, firstDay } = selection;
            const formattedDate = firstDay
                ? new Date(firstDay).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                : 'Sem data definida';
            return {
                title,
                media,
                subtitle: `Início: ${formattedDate}`,
            };
        },
    },
    orderings: [
        {
            title: 'Data do evento (mais próximos primeiro)',
            name: 'eventDateAsc',
            by: [{ field: 'schedule.0.date', direction: 'asc' }],
        },
        {
            title: 'Data do evento (mais distantes primeiro)',
            name: 'eventDateDesc',
            by: [{ field: 'schedule.0.date', direction: 'desc' }],
        },
    ],
});
