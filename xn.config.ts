import { defineConfig } from '@xn-sakina/meta'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  cache: true,
  compile: 'swc',
  mfsu: true,
  splitChunks: ['@arco', 'cropper'],
  publicPath: isProd ? '//cdn.jsdelivr.net/gh/xn-sakina/usagi@gh-pages/' : '/',
})
