<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 16:46:49
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-29 17:38:51
 * @FilePath: \bigevent-vue3\src\views\daynote\daynotehead.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
    <div id="top-bar">
        <img src="/assets/image/logo(1).png" class="logo1">
        <img src="/assets/image/logo(2).png" class="logo2">
        <a class="function" href="https://1diary.me/web2/#/login?redirect=%2F">私密日记</a>
        <a class="function" href="https://www.51miz.com/so-sucai/92744.html">素材</a>
        <a class="function" href="https://www.sohu.com/a/655338847_121663109">夹带私货</a>
        <button class="flower-button" @click="toggleAudioPlayer">播放BGM</button>
        <audio v-if="showAudioPlayer" controls autoplay loop>
            <source src="/music/yoursmile.wav" type="audio/mpeg">
            Your browser support the audio element.
        </audio>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showAudioPlayer = ref(false);
const toggleAudioPlayer = () => {
    showAudioPlayer.value = !showAudioPlayer.value;
};
showAudioPlayer.value = false;
</script>

<style lang="scss" scoped>
#top-bar {
    min-height: 34px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/assets/image/head.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% auto;
}

.logo1 {
    width: 50px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
}

.logo2 {
    width: auto;
    height: 34px;
    margin-right: 10px;
}

.daynote-picture {
    display: block;
    width: 132px;
    height: 32px;
    color: #ffffff;
}

.function {
    margin-right: 10px;
    color: rgb(255, 255, 255);
    background-color: rgb(83, 139, 88);
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    background-size: 40% auto;
}

.flower-button {
    position: relative;
    padding: 10px 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    overflow: hidden;
    font-family: Arial;
    font-size: 18px;
    color: rgb(238, 93, 161);
}

.flower-button::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 105, 180, 0.5);
    ;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: rotate 2s linear infinite;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
</style>