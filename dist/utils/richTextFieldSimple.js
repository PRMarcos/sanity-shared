export const richTextFieldSimple = {
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
                { title: 'Heading 3', value: 'h3' },
                { title: 'Heading 4', value: 'h4' },
            ],
            lists: [],
            marks: {
                decorators: [
                    { title: 'Negrito', value: 'strong' },
                    { title: 'Itálico', value: 'em' },
                    { title: 'Sublinhado', value: 'underline' },
                ],
            },
        },
    ],
};
