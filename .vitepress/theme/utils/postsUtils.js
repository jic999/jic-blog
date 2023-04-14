const path = require('path')
const fs = require('fs')

export function readMdFiles(dir) {
  const files = fs.readdirSync(dir)
  const mdFiles = []
  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      mdFiles.push(...readMdFiles(filePath))
    } else if (path.extname(filePath) === '.md') {
      mdFiles.push(filePath)
    }
  })
  return mdFiles
}

export function categorizePosts(posts) {
  const postsByTag = {}
  const postsByDir = {}
  posts.forEach((post) => {
    // 按dir分类
    // - path从posts截断
    const start = post.path.indexOf('\\posts')
    post.path = post.path.substring(start, post.path.length).replaceAll('\\', '/')
    // - 倒数第二个即为目录
    const dirArr = post.path.split('/')
    const dirName = dirArr[dirArr.length - 2]
    if (!postsByDir[dirName]) postsByDir[dirName] = []
    postsByDir[dirName].push(post)
    // 按tag分类
    const tagList = post.tags?.split(' | ') || []
    tagList.forEach((tag) => {
      if (!postsByTag[tag]) postsByTag[tag] = []
      postsByTag[tag].push(post)
    })
  })
  return {
    postsByDir,
    postsByTag,
  }
}
