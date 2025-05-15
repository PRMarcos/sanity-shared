import { defineType, defineField } from 'sanity';
export default defineType({
    name: 'phoneEntry',
    title: 'Cadastro de Telefones',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome',
            type: 'string',
            validation: Rule => Rule.required().error('O nome é obrigatório.'),
        }),
        defineField({
            name: 'number',
            title: 'Telefone',
            type: 'string',
            validation: Rule => Rule.required()
                .regex(/^\d{11,13}$/, {
                name: 'telefone internacional',
                invert: false,
            })
                .error('Insira apenas números com DDD e código do país. Ex: 5511999999999'),
        }),
        defineField({
            name: 'isWhats',
            title: 'É WhatsApp?',
            type: 'boolean',
            initialValue: false,
        }),
    ],
});
