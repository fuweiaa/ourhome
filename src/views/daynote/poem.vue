<!--
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-15 13:48:41
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-16 15:26:30
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
  // 发送POST请求
  // 假设 token 存储在 localStorage 中
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbXMiOnsiaWQiOjYsInVzZXJuYW1lIjoiZnV3ZWkxMTEifSwiZXhwIjoxNzE1ODg3NTc2fQ.IP3HuUhZhYzbkkHvZIiqp5Ju6fB2GWUH4qp4VBMTyDE';

  // 设置请求头部
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  // 发送 GET 请求
  axios.get('http://localhost:8080/user/userInfo', config)
    .then(response => {
      // 处理响应
      console.log(response.data);
    })
    .catch(error => {
      // 处理错误
      console.error(error);
    });
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