<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 16:13:50
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-27 11:12:33
 * @FilePath: \bigevent-vue3\src\components\Header.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
  <el-header class="header">
    <div class="leftpanel">
      <el-button class="points-social" @click="toSocial">查看朋友圈</el-button>
      <el-button class="points-familyfuns" @click="toPublish">朋友圈发布</el-button>
      <el-button class="points-daynote" @click="toDaynote">日记</el-button>
      <el-button class="points-eating" @click="toEating">吃饭大转盘</el-button>
      <el-button class="points-question" @click="toQuestion">答案之书</el-button>
      <el-button class="points-home" @click="toHome"></el-button>
      <!-- <img src="/assets/image/home.png" alt="Home" class="home-icon"> -->
    </div>
    <div class="rightpanel">
      <span>乌拉拉！小奇，你好</span>
      <el-dropdown>
        <span class="el-dropdown__box">
          <el-avatar />
          <el-icon>
            <CaretBottom />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/user/userInfo">
              <el-dropdown-item :icon="User">基本资料</el-dropdown-item>
            </router-link>
            <router-link to="/user/userAvatar">
              <el-dropdown-item :icon="Crop">更换头像</el-dropdown-item>
            </router-link>
            <router-link to="/user/userResetPassword">
              <el-dropdown-item :icon="EditPen">重置密码</el-dropdown-item>
            </router-link>
            <el-dropdown-item :icon="SwitchButton">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    </div>
  </el-header>
</template>

<script setup lang="ts">
import {
  ArrowDown, User,
  Crop,
  EditPen,
  SwitchButton,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
// Assuming this is within a <script setup> or composition API setup function
const router = useRouter();
function toSocial() {
  router.push('/social');
}

function toPublish() {
  router.push('/publish');
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
  height: 70px;
  top: 0;
  background-color: rgb(225, 244, 244);
  width: 100%;

  .rightpanel {
    display: flex;
    align-items: center;
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

.el-dropdown__box {
  display: flex;
  align-items: center;
}
</style>
