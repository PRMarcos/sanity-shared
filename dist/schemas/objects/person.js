import { defineType, defineField } from 'sanity';
export default defineType({
    name: 'person',
    title: 'Pessoa',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome',
            type: 'string',
            validation: Rule => Rule.required().error('O nome é obrigatório.'),
        }),
        defineField({
            name: 'birthDate',
            title: 'Data de Nascimento',
            type: 'date',
        }),
        defineField({
            name: 'title',
            title: 'Título',
            description: 'Ex: Pastor, Bispo, Evangelista...',
            type: 'string',
        }),
        defineField({
            name: 'titleAbbreviation',
            title: 'Abreviação do Título',
            description: 'Ex: Pr., Bp., Ev...',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Biografia',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'photo',
            title: 'Imagem',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'title',
            media: 'photo',
        },
        prepare({ title, subtitle, media }) {
            return {
                title,
                subtitle: subtitle ? `Título: ${subtitle}` : undefined,
                media,
            };
        },
    },
});
