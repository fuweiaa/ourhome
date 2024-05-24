<template>
  <div>用户个人资料界面</div>
  https://fuwei-event.oss-cn-beijing.aliyuncs.com/8e84f748-ed69-48ef-ae33-5a6620e21c8f.jpg
  https://fuwei-event.oss-cn-beijing.aliyuncs.com/edd5a58e-da3a-4796-bace-2a7b14646b1b.jpg
</template>

<script setup lang="ts">
import { userInfoService } from '@/api/user.ts';
import { onMounted } from 'vue';
const userInfo = ref({})
let userPic = userInfo.userPic;
onMounted(() => {
  getDetail();
})

const getDetail = async () => {
  let result = await userInfoService();
  const userInfo = result.data;
  console.log(result);
}
</script>

<style lang="scss" scoped></style>