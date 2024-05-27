<!--
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-15 15:13:48
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-27 11:23:19
 * @FilePath: \ourhome\src\components\background.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="scene">
    <img src="/assets/image/dong.gif" alt="Animation" class="animation">
    <div class="content">
      <h class="welcomeword">Welcome to Shao's Family Big Courtyard</h>
      <p class="littleword" ref="littleword">{{ displayText }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const words = "I've been waiting for you for a long time.";
const displayText = ref('');
// const showBackground = ref(true); // 控制是否显示背景图片

onMounted(() => {
  displayWords();
});


function displayWords() {
  let index = 0;
  const interval = setInterval(() => {
    displayText.value += words[index];
    index++;
    if (index >= words.length) {
      clearInterval(interval);
    }
  }, 100); // 设置每个字显示的时间间隔
}

// 点击按钮时触发函数，使背景的 margin-top 变为 50px
// function moveBackground() {
//     const scene = document.querySelector('.scene');
//     if (scene) {
//         scene.style.marginTop = '58px';
//     }
// }
</script>


<style scoped>
.scene {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 0px;
  cursor: pointer;
  /* 设置鼠标指针样式为手型 */
}

.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* 在垂直方向上居中 */
  align-items: center;
  height: 50vh;
}

.animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.welcomeword {
  font-size: 100px;
  background-color: azure;
  opacity: 50%;
  display: flex;
  font-family: 'Garamond', serif;
  margin-top: auto;
}

.littleword {
  font-size: 30px;
  background-color: azure;
  opacity: 50%;
  justify-content: center;
  display: flex;
  font-family: 'Garamond', serif;
  /* align-items: center;
    height: 100vh; */
}
</style>