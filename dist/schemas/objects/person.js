import { defineType, defineField } from 'sanity';
import { validateImageInput } from '../../utils';
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
            description: "Imagem de perfil para ser usadas nas aperesentaões, resolução e aspectos minimos esperados 500x500",
            options: { hotspot: true },
            validation: Rule => Rule
                .custom(validateImageInput({ minWidth: 500, aspectRatio: 1 }))
                .required()
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
