import { defineType, defineField } from 'sanity';
export default defineType({
    name: 'emailEntry',
    title: 'Cadastro de E-mails',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome',
            type: 'string',
            validation: Rule => Rule.required().error('O nome é obrigatório.'),
        }),
        defineField({
            name: 'address',
            title: 'E-mail',
            type: 'string',
            validation: Rule => Rule.required()
                .email()
                .error('Insira um e-mail válido.'),
        }),
    ],
});
