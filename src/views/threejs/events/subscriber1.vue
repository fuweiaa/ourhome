<template>
  <div class="subscriber1">
    <h1>Subscriber 1</h1>
    <div>
      <p>Name: {{ store.info.name }}</p>
      <p>Email: {{ store.info.mail }}</p>
      <p>Phone: {{ store.info.phone }}</p>
      <button @click="store.setInfo('subscriber1')">Update</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInfoStore } from '@/stores/eventest'
// 可以在组件中的任意位置访问 `store` 变量 
const store = useInfoStore()
</script>

<style lang="scss" scoped>
.subscriber1 {
  background-color: #1a94bc;
  padding: 10px;
}
</style>
