<!--
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-15 13:48:41
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-28 11:02:36
 * @FilePath: \ourhome\src\views\daynote\poem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="notebook">
    <h4>此情此景，好想吟诗一首</h4>
    <div class="toolbar">
      <button @click="startWriting">开始写诗</button>
      <button @click="savePoem">保存</button>
      <button @click="showHistory">历史保存</button>
    </div>
    <div class="content" v-if="writing">
      <textarea v-model="poemContent" placeholder="在这里写下你的诗歌"></textarea>
    </div>
    <div class="history" v-if="showingHistory">
      <ul>
        <li v-for="(poem, index) in savedPoems" :key="index">{{ poem }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';


const writing = ref(false);
const showingHistory = ref(false);
const poemContent = ref('');
const savedPoems = ref([]);

const startWriting = () => {
  writing.value = true;
};

const savePoem = () => {
  if (poemContent.value.trim() !== '') {
    savedPoems.value.push(poemContent.value.trim());
    poemContent.value = '';
    writing.value = false;
  }
};



const showHistory = () => {
  // showingHistory.value = true;
};
</script>

<style scoped>
.notebook {
  position: relative;
  border: 1px solid #ccc;
  padding: 20px;
  width: 400px;
  height: 470px;
  margin-right: 20px;
}

.toolbar button {
  margin-right: 10px;
}
</style>