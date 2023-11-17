import { createResolver, defineNuxtModule, addPlugin } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'naive-ui'
  },
  setup () {
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/plugin.server.ts'))
   }
})
