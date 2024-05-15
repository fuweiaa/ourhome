<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 16:13:50
 * @LastEditors: yy
 * @LastEditTime: 2024-04-30 13:54:18
 * @FilePath: \bigevent-vue3\src\components\Header.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
    <el-header class="header">
        <div class="leftpanel">
            <el-button class="points-social" @click="toSocial">查看朋友圈</el-button>
            <el-button class="points-familyfuns" @click="">朋友圈发布</el-button>
            <el-button class="points-daynote" @click="toDaynote">日记</el-button>
            <el-button class="points-eating" @click="toEating">吃饭大转盘</el-button>
            <el-button class="points-question" @click="toQuestion">答案之书</el-button>
            <el-button class="points-home" @click="toHome"></el-button>
            <!-- <img src="/assets/image/home.png" alt="Home" class="home-icon"> -->



        </div>
        <div class="rightpanel">
            <span>乌拉拉！小奇，你好</span>
            <el-button class="points" @click="login">登录</el-button>
            <el-button class="points" @click="logout">退出</el-button>
        </div>
    </el-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
// Assuming this is within a <script setup> or composition API setup function
const router = useRouter();
function toSocial() {
    router.push('/social');
}

function toDaynote() {
    router.push('/daynote');
}

function toEating() {
    router.push('/eating');
}

function toQuestion() {
    router.push('/question');
}

function toHome() {
    router.push('/');
}

function login() {
    router.push('/login'); // 切换到登录界面，连接到后端登录界面
}

function logout() {
    alert("退出登录"); // 需要后端接口
}
</script>

<style lang="scss" scoped>
.header {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    background-color: rgb(225, 244, 244);
    width: 100%;

    .rightpanel span {
        margin: 8px
    }
}


.points-home {
    background-image: url("/assets/image/home.png");
    background-size: 30PX, 30PX;
    background-color: transparent;
}

.home-icon {
    width: 30px;
    height: 30px;
    margin: 8px;
}

.points-social {
    background-color: #e6ddb6;
    color: #414141;
}

.points-familyfuns {
    background-color: #adc9ca;
    color: #414141;
}

.points-daynote {
    background-color: #ebdbde;
    color: #414141;
}

.points-eating {
    background-color: #c3b7bb;
    color: #414141;
}

.points-question {
    background-color: #c4e5b0;
    color: #414141;
}
</style>
