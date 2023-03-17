<script setup>
import Banner from './Banner.vue'
import BlogList from './BlogList.vue'
</script>

<template>
  <Banner />
  <main class="main">
    <BlogList />
  </main>
</template>

<style lang="scss" scoped>
.main {
  max-width: calc(var(--vp-layout-max-width) - 64px);
  margin: 0 auto;
}
</style>
