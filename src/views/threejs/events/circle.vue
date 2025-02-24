<template>
  <svg width="100" height="100" viewBox="0 0 100 100">
    <!-- 背景圆环 -->
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke="#e0e0e0"
      stroke-width="10"
      fill="none"
    />
    <!-- 前景圆环（动态进度） -->
    <circle
      cx="50"
      cy="50"
      r="45"
      :stroke-dasharray="circumference"
      :stroke-dashoffset="dashOffset"
      stroke="#4caf50"
      stroke-width="10"
      fill="none"
      stroke-linecap="round"
      transform="rotate(-90 50 50)" 
    />
  </svg>
  <input type="number" v-model.number="inputValue" @change="updateProgress" placeholder="请输入进度（百分比）">
  <button class="btn" @click="updateProgress">进度更新</button>
</template>

<script setup lang="ts">
import { ref,computed,onMounted } from 'vue';
const inputValue = ref(20);
const radius = 45;
const circumference = 2 * Math.PI * radius; // 圆环的总周长
const progress = ref<number | 0>(0); // 当前进度（百分比）
// const dashOffset = ref(circumference * (1 - progress.value / 100)); // 计算偏移量
const dashOffset = computed(() => circumference * (1 - progress.value / 100));
onMounted(() => { 
  updateProgress()  // 初始化时更新 progress
})
function updateProgress() {
  progress.value = inputValue.value
}
</script>

<style lang="scss" scoped>
</style>
