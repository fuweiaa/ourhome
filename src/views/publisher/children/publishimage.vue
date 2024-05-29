<!-- PublishImage.vue -->
<template>
  <div class="container">
    <div class="header"><span class="header-icon">❀</span><span class="header-title">图文编辑</span></div>
    <!-- <h1>图文发布</h1> -->
    <div class="upload-area">
      <div class="upload-wrapper">
        <input class="upload-input" type="file" accept=".jpg,.jpeg,.png,.webp" @change="handleFileChange" />
        <div class="wrapper">
          <div class="wrapper-content">
          <p class="wrappicture">拖拽图片到此或点击上传</p>
          <p class="wrapppicture2">（最多支持上传18张）</p>
          <button aria-disabled="false" type="button" class="el-button el-button--primary"><!--v-if-->
            <span>上传图片</span>
          </button>
        </div>
      </div>
      </div>
      <div class="alltip">
        <div class="tip">
          <p>图片大小</p>
          <div class="littleword">支持上传的图片大小，</div>
          <div class="littleword">最大20MB的图片文件</div>
        </div>
        <div class="tip">
          <p>图片格式</p>
          <div class="littleword">支持上传的图片格式，</div>
          <div class="littleword">推荐使用png、jpg、jpeg、webp</div>
        </div>
        <div class="tip">
          <p>图片分辨率</p>
          <div class="littleword">推荐上传宽高比为3:4、分辨率不低于720*960的照片，</div>
          <div class="littleword">超过1280P的图片用网页端上传画质更清晰</div>
        </div>
      </div>
    </div>
    <!-- <input type="file" accept="image/*" @change="handleFileChange" /> -->
    <div class="titleinput">
      <input type="text" class="inputinner" v-model="title" placeholder="填写标题，更引人注目哦～" />
    </div>
    <div class="wenan"> <textarea v-model="content" placeholder="填写文案（可以拖动调节文案框大小）"></textarea></div>
    <label for="publish-time">发布时间：</label>
    <input id="publish-time" type="datetime-local" v-model="publishTime" />
    <!-- 添加权限设置等其他功能 -->
    <button @click="publish" class="publicbutton">发布</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('');
const content = ref('');
const publishTime = ref('');

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    console.log('文件已选择', file);
  }
};

const publish = () => {
  // 发布图文
  console.log('发布图文：', title.value, content.value, publishTime.value);
  // 可以在这里提交表单数据到后端进行处理
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 20px;
  margin-top: 20px;
}

.header-icon {
  text-align: center;
  font-size: 30px;
  color: #4eb9c5;
}

.header-title {
  font-size: 26px;
  line-height: 28px;
  font-weight: 900;
}

.upload-area {
  margin-bottom: 20px;
}
.wrapper {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}
.wrapper-content {
    text-align: center; 
}
.wrappicture {
  font-size: 14px;
  color: #262626;
  margin-top: 20px;
  align-items: center; /* 垂直居中 */
}

.wrapppicture2 {
  color: #999;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 20px;
}
.upload-wrapper {
  width: 100%;
  height: 200px;
  position: relative;
  background-color: #f7f7f7
}

.upload-input {
  opacity: 0;
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.alltip {
  display: flex;
  margin-top: 10px;
}

.tip {
  flex: 1;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 4px;
  text-align: center;
  padding-top: 32px;
  height: 130px;
}

.littleword {
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #8c8c8c;
}

.titleinput {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 90%;
}

.inputinner {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  color: #2d2d2d;
  display: inline-block;
  font-size: inherit;
  height: 32px;
  line-height: 22px;
  outline: none;
  padding: 0 60px 0 12px;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  width: 100%;
  margin-bottom: 20px;
}

.wenan {
  margin-bottom: 20px;
}

.publicbutton {
  // position: relative;
  bottom: 20px;
  right: 20px;
  padding: 15px 30px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  margin-left: 100px;
}

.publicbutton:hover {
  background-color: #0056b3;
  /* 悬停时改变背景颜色 */
}
</style>