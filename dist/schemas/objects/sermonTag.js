import { defineType, defineField } from 'sanity';
export default defineType({
    name: 'sermonTag',
    title: 'Tag de Sermão',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: Rule => Rule.required().error('O título é obrigatório.'),
        }),
    ],
    preview: {
        select: { title: 'title' },
    },
});
