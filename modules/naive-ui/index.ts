import { createResolver, defineNuxtModule, addPlugin, extendViteConfig, addComponent } from 'nuxt/kit'
import naiveui from "naive-ui";

export default defineNuxtModule({
  meta: {
    name: 'naive-ui',
    compatibility: {
      nuxt: "^3.7.0",
    },
  },

  // Add types for volar
  hooks: {
    "prepare:types": ({ references }) => {
      references.push({
        types: "naive-ui/volar",
      });
    },
  },

  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/plugin.server.ts'))

     // https://www.naiveui.com/en-US/os-theme/docs/ssr
    if (process.env.NODE_ENV === "production") {
      nuxt.options.build.transpile.push(
        "naive-ui",
        "vueuc",
        "@css-render/vue3-ssr",
        "@juggle/resize-observer"
      );
    } else {
      nuxt.options.build.transpile.push("@juggle/resize-observer");

      extendViteConfig((config) => {
        config.optimizeDeps = config.optimizeDeps || {};
        config.optimizeDeps.include = config.optimizeDeps.include || [];
        config.optimizeDeps.include.push(
          "naive-ui",
          "vueuc",
          "date-fns-tz/formatInTimeZone"
        );
      });
    }

    // Add imports for naive-ui components
    const naiveComponents = Object.keys(naiveui).filter((name) =>
      /^(N[A-Z]|n-[a-z])/.test(name)
    );

    naiveComponents.forEach((name) => {
      addComponent({
        export: name,
        name: name,
        filePath: "naive-ui",
      });
    });
  }
})
