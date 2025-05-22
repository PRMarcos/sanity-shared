# 🧩 sanity-shared

Pacote compartilhado contendo os schemas, queries GROQ, tipagens e funções auxiliares utilizadas exclusivamente pelo projeto do site institucional da Igreja Apostólica Monte Sião Linhares, incluindo o Sanity Studio e as aplicações front-end relacionadas.

## 🎯 Objetivo

Garantir consistência e segurança na integração entre o Sanity e os projetos que consomem seus dados no site da Igreja Apostólica Monte Sião Linhares, centralizando os contratos de dados (schemas e queries) em um único repositório versionado e específico para esse projeto.

## 🚀 Funcionalidades

- ✅ Schemas do Sanity centralizados  
- ✅ Queries GROQ reutilizáveis  
- ✅ Tipagens TypeScript geradas automaticamente com `sanity-typegen`  
- ✅ Funções auxiliares reutilizáveis  

## 📦 Instalação

### Usando npm

```bash
npm install git+https://github.com/prmarcos/sanity-shared.git
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
### Queries com variaveis (Next.js)

```ts
import { findOneeventsByIdQuery } from 'sanity-shared/queries'

const eventId = 'abc123xyz'; 

const event = await sanityClient.fetch(findOneeventsQuery, { id: eventId });
```


## 📄 Licença

MIT