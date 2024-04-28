<!--
 * @Author: yy
 * @Date: 2024-04-25 16:24:45
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-28 17:23:44
 * @FilePath: \bigevent-vue3\src\views\socialfriends\charts\card.vue
-->
<template>
  <div id="datetime">
    <el-scrollbar height="100vh">
      <div v-for="(item, index) in info" :key="index" class="scrollbar-demo-item">
        <div class="imgarea">
          <img src="./pic.jpg" alt="Image">
        </div>
        <div class="detailarea">
          <span>
            {{ item.copywriting }}
          </span>
        </div>
        <!-- <button @click="modifyItem(item)">修改内容</button> -->
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let info = ref([
  { imgs: ref('./pic.jpg'), copywriting: '在这片美丽的风景中，时间仿佛凝固了。阳光洒在青翠的山川上，映衬出一幅宁静和谐的画面。远处的山峦起伏，宛如巨龙蜿蜒盘旋，似乎在诉说着千年的故事。' },
  { imgs: ref('../imgs/pic2.jpeg'), copywriting: '湖水清澈见底，仿佛镜面一般，倒映出蓝天白云和青山绿树的倩影。微风拂过湖面，荡起层层涟漪，如同一曲悠扬的旋律，轻轻拂动心弦。' },
  { imgs: ref('../imgs/pic2.jpeg'), copywriting: '漫步在这片宁静之地，心灵仿佛得到了净化，烦忧和疲惫在这片静谧中消散。远离城市的喧嚣，融入大自然的怀抱，感受到了生命的美好和宁静。' },
  { imgs: ref('../imgs/pic2.jpeg'), copywriting: '每一处景致都是大自然的杰作，每一帧画面都是心灵的治愈。在这片静谧的风景中，人与自然和谐共处，让人心生敬畏和感慨。' },
  { imgs: ref('../imgs/pic2.jpeg'), copywriting: '愿我们永远珍惜这份美好，保护大自然的环境，让这片风景永远美丽如初。' },
])

</script>

<style lang="scss" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  margin: 10px;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  width: auto;
  position: relative;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;

  .imgarea {
    position: absolute;
    left: 100px;
    // background-color: aqua;
    height: 180px;
    width: 180px;
  }

  .detailarea {
    width: 800px;
    height: 180px;
    text-align: left;

  }
}


.select-buttons {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.select-buttons button {
  padding: 2px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
}

.select-buttons button:hover {
  background-color: #e0e0e0;
}
</style>