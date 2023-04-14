<script setup>
const AVATAR_URL = 'http://static.bchend.cn/blog/jic-avatar.jpg'
</script>

<template>
  <div flex-center py-24>
    <img
      :src="AVATAR_URL"
      class="absolute l-50% t-0 -translate-50% w-72 h-72 br-50 border-2 border-fff"
    />
    <div flex flex-col gap-4 w-54p text-center>
      <h3>Jic999</h3>
      <p text-14>志合者不以山海为远~</p>
      <!-- <p text-14>With shared aspirations cannot be separated by mountains and oceans~</p> -->
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
</template>

<style lang="scss" scoped></style>
