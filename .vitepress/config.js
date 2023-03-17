import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/'
  title: 'Jic999's Blog',
  description: "Jic999's blog",
  lastUpdated: true,
  head: [
    [
      'link',
      { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
    ],
  ],
  themeConfig: {
    lastUpdatedText: '最后更新',
    outline: {
      label: '索引',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/posts/', activeMatch: '/posts/[^/]*$' },
      { text: '日记', link: '/posts/diary/', activeMatch: '/diary/[^/]*$' },
    ],
    sidebar: {
      '/posts/': blogSidebar(),
      '/posts/diary/': diarySidebar(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/jic999' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Jic999',
    },
  },
})

function blogSidebar() {
  return [
    {
      text: 'Blog',
      link: '/posts/',
      items: [
        { text: 'blog start', link: '/posts/blog-start' },
        { text: '测试文章', link: '/posts/blog-test' },
      ],
    },
  ]
}

function diarySidebar() {
  return [
    {
      text: '日记',
      link: '/posts/diary/',
      items: [{ text: '第一篇', link: '/posts/diary/001' }],
    },
  ]
}
