# 🧩 sanity-shared

Pacote compartilhado contendo os schemas, queries GROQ, tipagens e funções auxiliares utilizadas por múltiplos projetos (como Sanity Studio e aplicações front-end).

## 🎯 Objetivo

Garantir consistência e segurança na integração entre o Sanity e os projetos que consomem seus dados, centralizando os contratos de dados (schemas e queries) em um único repositório versionado.

## 🚀 Funcionalidades

- ✅ Schemas do Sanity centralizados  
- ✅ Queries GROQ reutilizáveis  
- ✅ Tipagens TypeScript geradas automaticamente com `sanity-codegen`  
- ✅ Funções auxiliares reutilizáveis  
- ✅ Pronto para ser consumido por projetos Front-end e Studio  

## 📦 Instalação

### Usando npm

```bash
npm install github:PRMarcos/sanity-shared
```

## 🧑‍💻 Como usar

### No Sanity Studio

```ts
// sanity.config.ts
import { sharedSchemas } from 'sanity-shared'

export default defineConfig({
  schema: {
    types: [...sharedSchemas],
  },
})
```

### No Front-end (Next.js)

```ts
import { contactPageQuery } from 'sanity-shared/queries'
import { ContactPage } from 'sanity-shared/types'

const data = await sanityClient.fetch<ContactPage>(contactPageQuery)
```

## 📄 Licença

MIT