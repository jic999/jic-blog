import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
  transformerDirectives,
} from 'unocss'
import { presetScalpel } from 'unocss-preset-scalpel'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  rules: [
    [
      /border-(\d+)-(\w+)-([a-f0-9]{3,7})/,
      ([, width, style, color]) => ({
        border: `${width}px ${style} #${color}`,
      }),
    ],
    [
      /^ellipsis-(\d+)$/,
      ([, n]) => ({
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        display: ' -webkit-box',
        '-webkit-line-clamp': `${n}`,
        '-webkit-box-orient': 'vertical',
      }),
    ],
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
  },
  theme: {
    colors: {
      primary: 'var(--vp-c-brand)',
      dark_bg: '#1e1e20',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      collections: {
        custom: FileSystemIconLoader('./public/icon', (svg) =>
          svg.replace(/#[a-fA-F0-9]{3,6}/, 'currentColor')
        ),
      },
    }),
    transformerDirectives(),
    presetScalpel(),
  ],
})
