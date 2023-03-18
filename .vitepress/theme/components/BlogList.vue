<script setup>
import { reactive } from 'vue'
import { data as posts } from '../post.data'
import Pagination from './Pagination.vue'
import { useRouter } from 'vitepress'

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

const router = useRouter()
</script>

<template>
  <div w-92p max-w-660 mx-auto>
    <h2 class="list__header" py-24 text-24 text-left font-600 italic>Recent</h2>
    <div
      v-for="post in articleGroupList[pagingInfo.pageNo]"
      :key="post.date.time"
      :class="`flex justify-between items-center
          px-24 py-16 mb-24 border-1-solid-f0f0f0 transition-200 cursor-pointer
          hover:shadow-lg hover:translate-y--8 dark:border-gray-6`"
      @click="router.go(post.path)"
    >
      <!-- left -->
      <div
        :style="{ width: post.banner ? '' : '100%' }"
        class="flex flex-col gap-y-8 max-w-60p md:max-w-72p"
      >
        <!-- info -->
        <div flex items-center gap-x-16>
          <span text-14>{{ post.author }}</span>
          <span text-14>{{ post.date.string }}</span>
          <span
            v-if="post.tags"
            style="border-radius: 16px 0 0 16px; border: 1px solid currentColor"
            class="pl-12 pr-4 text-12 opacity-78 sm:block hidden"
          >
            {{ post.tags }}
          </span>
        </div>
        <!-- title -->
        <div text-18 font-600 ellipsis>{{ post.title }}</div>
        <!-- desc -->
        <div text-14 ellipsis-2>{{ post.excerpt }}</div>
      </div>
      <!-- right -->
      <img
        v-if="post.banner"
        :src="post.banner"
        class="sm:w-144 sm:h-96 w-108 h-72 br-4 object-center object-cover"
      />
    </div>
    <Pagination
      v-model:pageNo="pagingInfo.pageNo"
      :page-size="pagingInfo.pageSize"
      :pages="pagingInfo.pages"
    />
  </div>
</template>

<style lang="scss" scoped></style>
