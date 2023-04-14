import { defineConfig } from 'vitepress'
import path from 'path'

import post from './theme/post.data'
import { readMdFiles } from './theme/utils/postsUtils'

const files = readMdFiles(path.resolve('posts'))
const { postsByDir, postsByTag } = post.load(files)

export default defineConfig({
  base: '/',
  title: 'Jic999',
  description: "Jic999's blog",
  lastUpdated: true,
  cleanUrls: true,
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }]],
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

function getSidebarItems(dir, sort = 'desc') {
  const posts = postsByDir[dir].map((post) => ({
    text: post.title,
    link: post.path,
  }))
  if (sort === 'desc') return posts.reverse()
  return posts
}
function blogSidebar() {
  return [
    {
      text: 'Blog',
      link: '/posts/',
      items: getSidebarItems('posts'),
    },
  ]
}

function diarySidebar() {
  return [
    {
      text: 'Diary',
      link: '/posts/diary/',
      items: getSidebarItems('diary'),
    },
  ]
}
