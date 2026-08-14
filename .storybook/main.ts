import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": "@storybook/vue3-vite",
  async viteFinal(viteConfig) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(viteConfig, {
      cacheDir: 'node_modules/.cache/storybook-vite',
      optimizeDeps: {
        force: true,
        include: ['@tabler/icons-vue'],
      },
    });
  },
};
export default config;
