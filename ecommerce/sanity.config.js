import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: 'm90q02we',
  dataset: 'gionatatop',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
