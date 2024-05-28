<!-- 
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-23 11:11:05
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-28 10:45:18
 * @FilePath: \ourhome\src\views\user\UserAvatar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { Plus, Upload } from '@element-plus/icons-vue'
import { ref } from 'vue'
const uploadRef = ref()
import { useTokenStore } from '@/stores/token.ts'
const tokenStore = useTokenStore();

import useUserInfoStore from '@/stores/userInfo.ts'
const userInfoStore = useUserInfoStore();

//用户头像地址
const imgUrl = ref(userInfoStore.info.userPic)

//图片上传成功的回调函数
const uploadSuccess = (result) => {
  imgUrl.value = result.data;
}


import { userAvatarUpdateService } from '@/api/user.ts'
import { ElMessage } from 'element-plus'
//头像修改
const updateAvatar = async () => {
  //调用接口
  let result = await userAvatarUpdateService(imgUrl.value);
  console.log(result);

  ElMessage.success('文件上传成功')
  //修改pinia中的数据
  userInfoStore.info.userPic = imgUrl.value
}
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>更换头像</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-upload ref="uploadRef" class="avatar-uploader" :show-file-list="false" :auto-upload="true"
          action="/api/upload" name="file" :headers="{ 'Authorization': tokenStore.token }" :on-success="uploadSuccess">
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <img v-else src="@/assets/default.png" width="278" />
        </el-upload>
        <br />
        <el-button type="primary" :icon="Plus" size="large" @click="uploadRef.$el.querySelector('input').click()">
          选择图片
        </el-button>
        <el-button type="success" :icon="Upload" size="large" @click="updateAvatar">
          上传头像
        </el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 278px;
      height: 278px;
      display: block;
    }

    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }

    .el-upload:hover {
      border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
</style>