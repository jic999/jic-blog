<script setup>
import { useRouter } from 'vitepress'
import { data } from '../post.data'

const { postsByDir } = data

console.log('postsByDir', postsByDir)
const router = useRouter()
</script>

<template>
  <div px-16 py-12 italic>
    <h3 my-12>Categories</h3>
    <div text-14>
      <div
        v-for="(list, key) in postsByDir"
        :key="key"
        class="cate-item px-12 py-6 my-12 cursor-pointer hover:text-primary border-b"
        @click="router.go(list[0].path)"
      >
        {{ key }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cate-item {
  position: relative;
  transition: color 0.3s;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-bottom: 1px solid var(--vp-c-brand);
    transition: width 0.3s;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
}
</style>
