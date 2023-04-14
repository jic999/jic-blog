<script setup>
import { reactive } from 'vue'
import { data as postsData } from '../post.data'
import Pagination from './Pagination.vue'
import ArticleCard from './ArticleCard.vue'

const { posts, postsByTag, postsByDir } = postsData
console.log('posts', posts)
console.log('postsByTag', postsByTag)
console.log('postsByDir', postsByDir)
/* 分页 */
const PAGE_SIZE = 6
const articleGroupList = []
makePaging()
const pagingInfo = reactive({
  pageSize: PAGE_SIZE,
  pageNo: 0,
  total: posts.length,
  pages: articleGroupList.length,
})

function makePaging() {
  const _posts = [...posts]
  while (_posts.length > 0) articleGroupList.push(_posts.splice(0, PAGE_SIZE))
}
</script>

<template>
  <div w-92p max-w-660 mx-auto>
    <h2 class="list__header" py-24 text-24 text-left font-600 italic>Recent</h2>
    <template v-for="post in articleGroupList[pagingInfo.pageNo]" :key="post.date.time">
      <ArticleCard :article="post" />
    </template>
    <Pagination
      v-model:pageNo="pagingInfo.pageNo"
      :page-size="pagingInfo.pageSize"
      :pages="pagingInfo.pages"
    />
  </div>
</template>

<style lang="scss" scoped></style>
