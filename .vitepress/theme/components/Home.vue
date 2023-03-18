<script setup>
import Banner from './Banner.vue'
import BlogList from './BlogList.vue'
const AVATAR_URL = 'http://static.bchend.cn/blog/jic-avatar.jpg'
</script>

<template>
  <Banner />
  <main class="main" flex justify-center>
    <div
      :class="`relative w-720 py-24 translate-y-0 md:-translate-y-128 bg-hex-fffc shadow-xl dark:bg-hex-222c`"
    >
      <!--名片  -->
      <div flex-center py-24>
        <img
          :src="AVATAR_URL"
          :class="`absolute l-50% t-0 -translate-50%
            w-72 h-72 br-50 border-2 border-fff`"
        />
        <div flex flex-col gap-4 w-240 text-center>
          <h3>Jic999</h3>
          <p text-14>这家伙似乎很懒，什么都没有留下~</p>
          <div flex-center gap-8 mt-8>
            <a
              class="icon-btn i-ant-design:github-filled"
              href="https://github.com/jic999"
              target="_blank"
            ></a>
            <a
              class="icon-btn i-custom-juejin"
              href="https://juejin.cn/user/2617274671048504"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
      <!-- 文章列表 -->
      <BlogList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  max-width: calc(var(--vp-layout-max-width));
  margin: 0 auto;
}
</style>
