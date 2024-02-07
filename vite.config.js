import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: '/',
  publicDir: 'public',
  build: {
    // `root` からの相対パスで指定する
    outDir: './',
  },
});