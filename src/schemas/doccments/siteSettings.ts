import { defineType } from "sanity";

export default defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  fields: [
    {
      name: 'metaPixelId',
      title: 'ID do Pixel Meta',
      type: 'string',
    },
  ],
   preview: {
    prepare() {
      return {
        title: "Cofigurações do Site",
      };
    },
  },
});