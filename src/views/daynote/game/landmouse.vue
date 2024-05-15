<template>
  <div>
    <button @click="startGame" v-if="!gameStarted" class="button"></button>
    <div v-if="gameStarted" class="game-container">
      <div v-for="(hole, index) in holes" :key="index" class="hole" @click="hit(index)">
        <div v-if="hole.showMole" class="mole"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const holes = ref(Array(9).fill({ showMole: false }));
let gameInterval = null;
const gameStarted = ref(false);

function showRandomMole() {
  const randomIndex = Math.floor(Math.random() * 9);
  holes.value[randomIndex].showMole = true;
  setTimeout(() => {
    holes.value[randomIndex].showMole = false;
  }, 1000);
}

function hit(index) {
  if (holes.value[index].showMole) {
    holes.value[index].showMole = false;
    // 计分等其他逻辑可以在这里添加
  }
}

function startGame() {
  gameStarted.value = true;
  gameInterval = setInterval(showRandomMole, 1500); // 设置定时器
}
</script>

<style scoped>
.game-container {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
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
    background-image: url('/assets/image/mouse.jpg');
    background-size: 100px, 100px;
  }
.hole {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  position: relative;
}

.mole {
  width: 80px;
  height: 80px;
  background-color: brown;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
