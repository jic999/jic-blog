<script setup>
import { useRouter } from 'vitepress'
import { data } from '../post.data'

const { postsByTag } = data
const tags = Object.keys(postsByTag)
  .sort((a, b) => postsByTag[a].length - postsByTag[a].length[b])
  .splice(0, 24)

const tagColors = [
  '#34d399',
  '#059669',
  '#22d3ee',
  '#0891b2',
  '#818cf8',
  '#4f46e5',
  '#94A3B8',
  '#475569',
  '#fbbf24',
  '#d97706',
  '#fb7185',
  '#e11d48',
]
let tagColorsCopy = tagColors
function getRandomColor() {
  if (tagColorsCopy.length === 0) tagColorsCopy = tagColors
  const start = 0
  const end = tagColorsCopy.length
  const index = Math.floor(Math.random() * end) + start
  return tagColorsCopy.splice(index, 1)
}

const router = useRouter()
</script>

<template>
  <div p-12 pl-24>
    <h3 my-12 italic>Tags</h3>
    <div flex flex-wrap gap-x-12 gap-y-8 w-full text-fff>
      <span
        v-for="tag in tags"
        :key="tag"
        class="tag-item px-12 text-12 br-16 cursor-pointer"
        :style="{ background: getRandomColor() }"
        @click="router.go('/pages/tag-detail')"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag-item {
  transition: transform 0.2s;
  filter: saturate(48%);
  &:hover {
    transform: translateY(-3px);
  }
}
</style>
