import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { categorizePosts } from './utils/postsUtils'

const excludedFiles = ['index.md']

export default {
  watch: ['../../posts/**/*.md'],
  load(watchedFiles) {
    // 排除不必要文件
    const articleFiles = watchedFiles.filter((file) => {
      const filename = path.basename(file)
      return !excludedFiles.includes(filename)
    })
    // 解析文章 Frontmatter
    posts = articleFiles
      .map((articleFile) => {
        const articleContent = fs.readFileSync(articleFile, 'utf-8')
        const { data, excerpt } = matter(articleContent, { excerpt: true })
        return {
          author: 'jic999',
          ...data,
          date: formatDate(data.date),
          excerpt,
          path: articleFile.substring(articleFile.lastIndexOf('/posts/')).replace(/\.md$/, ''),
        }
      })
      .sort((a, b) => b.date.time - a.date.time)
    const { postsByDir, postsByTag } = categorizePosts(posts)
    return {
      posts,
      postsByDir,
      postsByTag,
    }
  },
}

function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  return {
    time: +date,
    string: date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
  }
}
