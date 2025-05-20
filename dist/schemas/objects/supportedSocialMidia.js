import { defineType, defineField } from 'sanity';
import { validateImageInput } from '../../utils';
export default defineType({
    name: 'supportedSocialMidia',
    title: 'Cadsatro de Mídias Sociais',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: Rule => Rule.required()
                .regex(/^[a-z0-9]+$/, {
                name: 'slug',
                invert: false,
            })
                .error('Use apenas letras minúsculas e números, sem espaços. Ex: instagram, linkedin'),
        }),
        defineField({
            name: 'icon',
            title: 'Ícone',
            type: 'image',
            description: "Icone da rede social em formato de imagem",
            options: {
                hotspot: true,
            },
            validation: Rule => Rule
                .custom(validateImageInput({ minWidth: 50, aspectRatio: 1 }))
                .required()
        }),
    ],
});
