<template>
  <div>
    <iframe :src="externalUrl" width="100%" height="990"></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const externalUrl = ref('https://www.myanswersbook.com/zh-cn/'); // 外部网页的 URL
</script>

<style scoped></style>
