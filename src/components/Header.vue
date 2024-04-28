<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 16:13:50
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-28 16:43:18
 * @FilePath: \bigevent-vue3\src\components\Header.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
    <el-header class="header">
        <div class="leftpanel">
            <el-button type="primary" class="points social" @click="toSocial">查看朋友圈</el-button>
            <el-button type="info" class="points familyfuns" @click="">朋友圈发布</el-button>
            <el-button type="success" class="points daynote" @click="toDaynote">日记</el-button>
            <el-button type="warning" class="points eating" @click="toEating">吃饭大转盘</el-button>
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
    background-color: bisque;

    .rightpanel span {
        margin: 8px
    }
}
</style>
