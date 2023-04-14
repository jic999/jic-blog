<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Banner from './Banner.vue'
import PersonalCard from './PersonalCard.vue'
import BlogList from './BlogList.vue'
import TagWall from './TagWall.vue'
import CategoryWall from './CategoryWall.vue'
import { animateCSS } from '../utils/animateUtils'

const siderVisibleRef = ref(false)
const $blogList = ref(null)
const $cateWall = ref(null)
const $tagWall = ref(null)

function showSider() {
  siderVisibleRef.value = true
  animateCSS('.cate-wall', 'fadeInLeft')
  animateCSS('.tag-wall', 'fadeInRight')
}
function hideSider() {
  animateCSS('.cate-wall', 'fadeOutLeft', () => (siderVisibleRef.value = false))
  animateCSS('.tag-wall', 'fadeOutRight')
}

function windowScrollHandler() {
  toggleSiderVisible()
}
function toggleSiderVisible() {
  if (document.documentElement.clientWidth < 1024) return
  const windowScrollY = window.scrollY
  if (windowScrollY > 128 && !siderVisibleRef.value) showSider()
  else if (windowScrollY < 128 && siderVisibleRef.value) hideSider()
}
onMounted(() => {
  window.addEventListener('scroll', windowScrollHandler)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', windowScrollHandler)
})
</script>

<template>
  <Banner />
  <main class="main" flex justify-center items-start>
    <!-- Left -->
    <div
      v-show="siderVisibleRef"
      ref="$cateWall"
      class="cate-wall animate__faster lg:block hidden w-240 min-h-480 mt-128 border-r-0"
    >
      <CategoryWall />
    </div>
    <!-- Center -->
    <div
      ref="blogList"
      class="blog-list relative w-720 min-h-810 py-24 translate-y-12 md:-translate-y-128 shadow-xl z-3"
      bg="md:hex-fffc md:dark:hex-222c hex-fff dark:dark_bg "
    >
      <!--名片  -->
      <PersonalCard />
      <!-- 文章列表 -->
      <BlogList />
    </div>
    <!-- Right -->
    <div
      v-show="siderVisibleRef"
      ref="$tagWall"
      class="tag-wall animate__faster lg:block hidden w-240 min-h-480 mt-128"
    >
      <TagWall />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  max-width: calc(var(--vp-layout-max-width));
  margin: 0 auto;
}
.cate-wall,
.tag-wall {
  border-width: 1px;
}
.cate-wall {
  border-right: none;
}
.tag-wall {
  border-left: none;
}
.blog-list {
  transition: all 0.5s;
}
</style>
