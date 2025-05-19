export function styledText({ title, name }: { title: string, name: string }) {
  return {
    title: title,
    name: name,
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
          { title: 'Heading 5', value: 'h5' },
          { title: 'Heading 6', value: 'h6' },
        ],
        lists: [],
        marks: {
          decorators: [
            { title: 'Negrito', value: 'strong' },
            { title: 'Itálico', value: 'em' },
            { title: 'Sublinhado', value: 'underline' },
          ],
          annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link Externo',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Abrir em nova aba?',
                initialValue: true,
              },
            ],
          },
        ],
        },
      },
    ],
  }
}
