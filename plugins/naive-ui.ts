import { setup } from "@css-render/vue3-ssr";
import { defineNuxtPlugin } from "#app";

// I'm not sure whether the plugin is called twice in each refreshing
// Maybe it's expected. If you have more information about it, please comment in the issue
export default defineNuxtPlugin((nuxtApp) => {
  // if (process.server) {
    const { collect } = setup(nuxtApp.vueApp);
    const originalRender = nuxtApp.ssrContext.renderMeta;
    nuxtApp.ssrContext!.renderMeta = () => {
      const result = originalRender();
      return {
        headTags: result["headTags"] + collect(),
      };
    };
  // }
});
