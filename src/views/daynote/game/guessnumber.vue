<template>
    <div class="container">
      <button @click="toggleGame" v-if="!gameStarted" class="button"></button>
      <div v-if="showGame" class="overlay" @click="closeGame"></div>
      <div v-if="showGame" class="game">
        <h1 @mousedown="startDragging">猜字游戏</h1>
        <input v-model="guess" type="number" min="1" max="100" class="hover-input" placeholder="请输入1到100之间的数字">
        <button @click="checkGuess">猜一猜</button>
        <p v-if="message">{{ message }}</p>
        <button @click="closeGame" class="close-button">关闭游戏</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const secretNumber = ref(generateRandomNumber());
  const guess = ref('');
  const message = ref('');
  const gameStarted = ref(false);
  const showGame = ref(false);
  
  function generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
  }
  
  function toggleGame() {
      showGame.value = !showGame.value;
  }
  
  function closeGame() {
      showGame.value = false;
  }
  
  function checkGuess() {
      const num = parseInt(guess.value);
      if (isNaN(num) || num < 1 || num > 100) {
          message.value = '请输入1到100之间的数字！';
      } else if (num === secretNumber.value) {
          message.value = '恭喜你，猜对了！';
      } else if (num < secretNumber.value) {
          message.value = '太小了，再试一次！';
      } else {
          message.value = '太大了，再试一次！';
      }
  }
  </script>
  
  <style scoped>
  .container {
    position: relative;
  }
  
  .button {
    border: none;
    color: white;
    padding: 32px 32px;
    width: 100px;
    height: 100px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    opacity: 80%;
    background-image: url('/assets/image/guessnumber.png');
    background-size: 100px, 100px;
  }
  
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999; /* 保证覆盖在其他内容上方 */
  }
  
  .game {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: white;
    padding: 20px;
    z-index: 1000; /* 保证覆盖在遮罩层上方 */
  }
  
  .hover-input {
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    transition: border-color 0.3s ease;
  }
  
  .hover-input:hover {
    border-color: blue;
  }
  
  .close-button {
    margin-top: 20px;
  }
  </style>
  