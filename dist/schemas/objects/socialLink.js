import { defineType, defineField } from 'sanity';
export default defineType({
    name: 'socialLink',
    title: 'Cadastro de Links Sociais',
    type: 'document',
    fields: [
        defineField({ name: 'title',
            title: 'Titulo',
            description: "Descreva a rede social e a quem ela pertence, assim fica facil de encontrar quando necessário. ex.: instagram do Marcos",
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'socialUserName',
            title: 'UserName da rede social',
            description: "Nome do usuário, ou @, pra ser usado de forma textual quando necessário",
            type: 'string',
            validation: Rule => Rule.required()
                .regex(/^[a-zA-Z0-9@#-_.]+$/, {
                name: 'usernameformt',
                invert: false,
            })
                .error('Use apenas letras maiuscula,minúsculas,números e os caracteres @ ou #, sem espaços. Ex: @MonteSiao, #TomandoPosseDaTerra'),
        }),
        defineField({
            name: 'type',
            title: 'Tipo',
            type: 'reference',
            to: [{ type: 'supportedSocialMidia' }],
            validation: Rule => Rule.required()
        }),
        defineField({ name: 'url',
            title: 'Link',
            type: 'url',
            validation: Rule => Rule.required()
        }),
    ],
});
