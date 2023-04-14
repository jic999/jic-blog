<script setup>
import { useRouter } from 'vitepress'

defineProps({
  article: {
    type: Object,
    required: true,
  },
})
const router = useRouter()
</script>

<template>
  <div
    class="article-card flex justify-between items-center px-24 py-16 mb-24 transition-200 border cursor-pointer"
    @click="router.go(article.path)"
  >
    <!-- left -->
    <div
      :style="{ width: article.banner ? '' : '100%' }"
      class="flex flex-col gap-y-8 max-w-60p md:max-w-72p"
    >
      <!-- info -->
      <div flex items-start gap-x-16 py-4 italic>
        <span text-14>{{ article.author }}</span>
        <span text-14>{{ article.date.string }}</span>
        <span
          v-if="article.tags"
          style="border-radius: 16px 0 0 16px"
          class="tag-shadow pl-12 pr-6 text-12 opacity-78 sm:block hidden shadow whitespace-nowrap"
        >
          {{ article.tags }}
        </span>
      </div>
      <!-- title -->
      <div text-18 font-600 ellipsis>{{ article.title }}</div>
      <!-- desc -->
      <div text-14 ellipsis-2>{{ article.excerpt }}</div>
    </div>
    <!-- right -->
    <img
      v-if="article.banner"
      :src="article.banner"
      class="sm:w-144 sm:h-96 w-108 h-72 br-4 object-center object-cover border"
    />
  </div>
</template>

<style lang="scss" scoped>
.tag-shadow {
  box-shadow: currentColor 1px 1px 2px;
}

$round: 0;
@mixin line-base {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  transition: all 0.3s;
  border: 0 solid var(--vp-c-brand);
  border-radius: $round;
}
.article-card {
  position: relative;
  border-radius: $round;

  &::before {
    @include line-base;
    left: 0;
    top: 0;
    border-right: 0;
    border-bottom: 0;
  }
  &::after {
    @include line-base;
    right: 0;
    bottom: 0;
    border-left: 0;
    border-top: 0;
  }
  &:hover {
    border-color: transparent;
    &::before {
      width: 100%;
      height: 100%;
      border-width: 1px;
    }
    &::after {
      width: 100%;
      height: 100%;
      border-width: 1px;
    }
  }
}
</style>
