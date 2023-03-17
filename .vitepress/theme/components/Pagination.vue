<script setup>
import { computed } from 'vue'

const props = defineProps({
  pageNo: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    default: undefined,
  },
})
const emits = defineEmits(['update:pageNo'])
const thisPage = computed({
  get: () => props.pageNo + 1,
  set: (pageNo) => changePage(pageNo - 1),
})
function changePage(pageNo) {
  if (pageNo === props.pageNo) return
  if (pageNo < 0) pageNo = 0
  else if (pageNo > props.pages - 1) pageNo = props.pages - 1
  emits('update:pageNo', pageNo)
  const header = document.querySelector('.list__header')
  window.scrollTo({ top: header.offsetTop, behavior: 'smooth' })
}
</script>

<template>
  <div flex justify-between items-center gap-x-12 c-primary>
    <button
      class="pagination__btn"
      :class="{ 'pagination__btn--disabled': pageNo === 0 }"
      :disabled="pageNo === 0"
      @click="changePage(pageNo - 1)"
    >
      prev
    </button>
    <div flex gap-x-8 text-14>
      <input
        v-model.lazy="thisPage"
        type="number"
        class="w-48 px-8 text-center border-1-solid-f0f0f0 dark:border-gray-7"
        @blur="handleInputBlur"
      />
      <span>/</span>
      <span>{{ pages }}</span>
    </div>
    <button
      class="pagination__btn"
      :class="{ 'pagination__btn--disabled': pageNo === pages - 1 }"
      :disabled="pageNo === pages - 1"
      @click="changePage(pageNo + 1)"
    >
      next
    </button>
  </div>
</template>

<style lang="scss" scoped>
.pagination__btn {
  padding: 4px 12px;
  border: 1px solid var(--vp-c-brand);
  transition: all 0.3s;
  &:enabled:hover {
    color: #fff;
    background-color: var(--vp-c-brand);
  }
  &--disabled {
    cursor: not-allowed;
  }
}
</style>
