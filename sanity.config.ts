import {defineConfig} from 'sanity'
import {schemaTypes} from './src/schemas'
import { colorInput } from '@sanity/color-input'
import { codeInput } from '@sanity/code-input'


export default defineConfig({
  name: 'default',
  title: 'imsl-institucional',

  projectId: '129trp1f',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },
    plugins: [
    colorInput(),
    codeInput()
  ],
})
