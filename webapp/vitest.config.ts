import { defineConfig } from 'vitest/config';
/// <reference types="vitest" />
/// <reference types="vite/client" />

export default defineConfig({
  test: { globals: true },
});
