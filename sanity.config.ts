import {defineConfig} from 'sanity'
import {schemaTypes} from './src/schemas'


export default defineConfig({
  name: 'default',
  title: 'imsl-institucional',

  projectId: '129trp1f',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },
})
