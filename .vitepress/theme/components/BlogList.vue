<script setup>
import { reactive } from 'vue'
import { data as posts } from '../post.data'
import Pagination from './Pagination.vue'

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
  <div flex justify-between mt-24>
    <div w-92p max-w-660 mx-auto>
      <h2 class="list__header" py-24 text-24 text-left font-600 italic>
        Recent
      </h2>
      <a
        v-for="post in articleGroupList[pagingInfo.pageNo]"
        :key="post.date.time"
        :href="post.path"
        :class="`flex justify-between items-center
          px-24 py-16 mb-24 border-1-solid-f0f0f0 transition-200 cursor-pointer
          hover:shadow-lg hover:translate-y--8 dark:border-gray-6`"
      >
        <!-- left -->
        <div :style="{ width: post.banner ? '' : '100%' }" w-60p md:w-72p>
          <!-- info -->
          <div flex items-center gap-x-16>
            <span text-14>{{ post.author }}</span>
            <span text-14>{{ post.date.string }}</span>
            <span
              v-if="post.tags"
              style="
                border-radius: 16px 0 0 16px;
                border: 1px solid currentColor;
              "
              class="pl-12 pr-4 text-12 opacity-78"
            >
              {{ post.tags }}
            </span>
          </div>
          <!-- title -->
          <div mt-12 text-18 font-600 ellipsis>{{ post.title }}</div>
          <!-- desc -->
          <div mt-12 text-14 ellipsis-2>{{ post.excerpt }}</div>
        </div>
        <!-- right -->
        <img v-if="post.banner" :src="post.banner" w-144 h-96 br-4 />
      </a>
      <Pagination
        v-model:pageNo="pagingInfo.pageNo"
        :page-size="pagingInfo.pageSize"
        :pages="pagingInfo.pages"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
