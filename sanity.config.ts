import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './src/app/schemas'

export default defineConfig({
  name: 'default',
  title: 'William Chu Portfolio',
  
  projectId: '9w2e468a',
  dataset: 'production',
  
  plugins: [deskTool()],
  
  schema: {
    types: schemaTypes,
  },
})