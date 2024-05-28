<!--
 * @Author: yy
 * @Date: 2024-04-25 16:24:45
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-27 17:23:01
 * @FilePath: \bigevent-vue3\src\views\socialfriends\charts\card.vue
-->
<template>
  <div>
    <!-- <el-scrollbar height="100vh"> -->
    <div v-for="(item, index) in info" :key="index" class="scrollbar-demo-item">
      <div class="imgarea">
        <img :src="item.coverImg" alt="图片无法正常加载">
      </div>
      <div class="detailarea">
        <p>{{ item.title }}</p>
        <span>
          {{ item.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import EventBus from "@/utils/useEventBus";
import { articleDetail } from '@/api/article.ts';

// let info = ref([{}
//   // { title: '四月十五，玥玥吃土', datetime: '4月15日', imgs: '/assets/socialfriends/吃土.jpg', copywriting: '四月十五，玥玥吃土' },
//   // { title: '玥玥的新旗袍，好看好看！', datetime: '4月19日', imgs: '/assets/socialfriends/旗袍.jpg', copywriting: '玥玥的新旗袍，好看好看！' },
//   // { title: '四月二三，樱桃酸酸', datetime: '4月23日', imgs: '/assets/socialfriends/樱桃.jpg', copywriting: '四月二三，樱桃酸酸' },
//   // { title: '天气晴朗，万物可爱', datetime: '4月27日', imgs: '/assets/socialfriends/露营.jpg', copywriting: '天气晴朗，万物可爱' },
//   // { title: '愿我们永远珍惜这份美好', datetime: '4月27日', imgs: '/assets/socialfriends/旗袍.jpg', copywriting: '愿我们永远珍惜这份美好，保护大自然的环境，让这片风景永远美丽如初。' }
// ])

let info = ref([]);

onMounted(() => {
  articleCatrgoryDetail()
})

// 声明一个异步函数
const articleCatrgoryDetail = async () => {
  let result = await articleDetail();
  info.value = result.data;
}

</script>

<style lang="scss" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  margin: 10px;
  border-radius: 4px;
  background-color: #a9b3b7;
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

    img {
      width: 80%;
      height: 100%;
    }
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