<!-- PublishSelector.vue -->
<template>
    <div class="noddle">
        <div class="menu-container">
            <h1 class="vertical-text">笔锋如剑斩文海</h1>
        </div>
        <div class="continer">
            <div class="hengpi-container">
                <h1 class="hengpi">妙笔生花</h1>
            </div>
            <h1 class="func">选择发布内容类型</h1>
            <div class="button">
                <button class="custom-button" @click="publishImage" title="发布图文">发布图文</button>
                <button class="custom-button" @click="publishVideo" title="发布视频">发布视频</button>
                <PublishImage v-show="ImageVisible"></PublishImage>

                <PublishVideo v-show="VideoVisible"></PublishVideo>
            </div>
        </div>
        <div class="menu-container">
            <h1 class="vertical-text">墨韵似诗绘书山</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import PublishImage from './children/publishimage.vue';
import PublishVideo from './children/publishvideo.vue';
import { ref } from 'vue'

const ImageVisible = ref(false);
const VideoVisible = ref(false);


const publishImage = () => {
    console.log("publishImage button clicked"); // 调试语句
    ImageVisible.value = !ImageVisible.value
    VideoVisible.value = false
};


function publishVideo() {
    VideoVisible.value = !VideoVisible.value
    ImageVisible.value = false

}
</script>

<style lang="scss" scoped>
.noddle {
    background-color: #eef1f8;
    width: 100%;
    height: calc(100vh - 72px);
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    gap: 0px;


}

.menu-container {
    margin: 0px 0px 24px;
    display: flex;
    align-items: flex-start;
    border-top: 1px solid rgb(237, 240, 247);
    width: 208px;
    // background-color: #d8ded8;
    justify-content: center;
    /* 水平居中 */
    margin-top: 100px;
}

.hengpi-container {
    margin: 0px 0px 24px;
    display: flex;
    align-items: flex-start;
    border-top: 1px solid rgb(237, 240, 247);
    width: auto;
    background-color: #eef1f8;
    justify-content: center;
    /* 水平居中 */
}

.vertical-text {
    writing-mode: vertical-rl;
    /* 文字竖排，从右到左 */
    text-orientation: upright;
    /* 文字直立 */
    border: 1px solid #f90505;
    /* 添加边框以便更容易看到效果 */
    padding: 10px;
    background-color: #f17575;
}

.hengpi {
    border: 1px solid #f90505;
    /* 添加边框以便更容易看到效果 */
    padding: 10px;
    background-color: #f17575;
    width: 200px;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    text-align: center;
    /* 多行文字居中对齐 */
}

.continer {
    background: #fff;
    border-radius: 8px;
    margin: 16px auto 50px;
    width: auto;
    max-width: 1180px;
    min-width: 1024px;
    min-height: 600px;
    overflow-x: hidden;
    overflow-y: auto;
}

.func {
    // background-color: #e1e7e1;
    display: inline-block;
    color: #63adf8;
    text-shadow:
        -1px -1px 0 #7e7e7e,
        1px -1px 0 #7e7e7e,
        -1px 1px 0 #7e7e7e,
        1px 1px 0 #7e7e7e;
    margin-left: 20px;
}

.button {
    margin-left: 20px;
}

.custom-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    background-color: #4d95dd;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-right: 10px;
}

.custom-button:hover {
    background-color: #45a049;
}

.custom-button:active {
    background-color: #398038;
}

.custom-button:focus {
    outline: none;
}
</style>