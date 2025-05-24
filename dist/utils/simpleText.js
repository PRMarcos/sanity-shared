export function simpleText({ title, name }) {
    return {
        title: title,
        name: name,
        type: 'array',
        of: [
            {
                type: 'block',
                styles: [],
                lists: [],
                marks: {
                    decorators: [
                        { title: 'Bold', value: 'strong' },
                        { title: 'Italic', value: 'em' },
                        { title: 'Underline', value: 'underline' },
                    ],
                    annotations: [],
                },
            },
        ],
    };
}
