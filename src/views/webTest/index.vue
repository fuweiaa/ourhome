<!-- 盒模型 -->
<!-- <template>
  <div class="box">忽如一夜春风来</div>
</template>
<style lang="scss" scoped>
.box{
  position: relative;
  width: 100px;
  height: 100px;
  background-color: red;
  border: 10px solid blue;
  box-sizing: border-box;
  padding: 20px;
}
</style> -->

<!-- CSS选择器优先级 -->
<!-- <template>
<div id="box" class="box" style="color: aqua;">css选择器优先级</div>
</template>
<style lang="scss" scoped>
@import './style/font.scss'; // 全局选择器

// 标签选择器
div{
  color: blue;
  color: rgb(255, 0, 221) !important; // 优先级最高
}

// 类选择器
.box{
  color: yellow;
}

// id选择器
#box{
  color: rgb(9, 255, 0);
}


</style> -->

<!-- 隐藏元素的方法有哪些 -->
<!-- <template>
<div id="box" class="box" >隐藏元素</div>
</template>
<style lang="scss" scoped>
.box{
  // display: none; // 元素隐藏，不占据空间
  // opacity: 0; // 元素，占据空间
  // visibility: hidden; // 元素隐藏，占据空间，让元素成一种不可见状态
  // position: absolute; // 使元素在可见视野之外，占据空间
  // left: -100px;
  clip-path: polygon(0 0, 0 0, 0 0, 0 0); // 创建一个裁剪区域，该区域内的内容才会显示出来，区域外的内容会被隐藏
}
</style> -->

<!-- px和rem、EM的区别 -->
<!-- <template>
  <div class="box">px和rem、EM的区别</div>
  <div class="px">px像素</div>
  <div class="rem">rem单位</div>
  <div class="em">em单位</div>
</template>

<style lang="scss" scoped>
.box{
  width: 100px;
  height: 100px;
  background-color: red;
  // font-size: 20px;
  // font-size: 2rem; // 1rem = 18px
  // font-size: 2em; // 1em = 20px
}
.px{
  font-size: 20px;
}
.rem{
  font-size: 2rem;
}
.em{
  font-size: 2em;
}

</style> -->

<!-- promise方法
1、用于解决回调地狱的问题
2、有三种状态：pending、fulfilled、rejected，状态改变只能是pending->fulfilled或者pending->rejected
3、then接受两个参数，第一个是成功的回调，第二个是失败的回调
-->
<!-- <template>
<div></div>
</template>
<script setup lang="ts">
const p1 = new Promise((resolve, reject) => {
  resolve('任务一成功');
});
const res = p1.then((res) => {
  console.log(res);
  return new Promise((resolve, reject) => {
    // resolve('任务二成功');
    reject('任务二成功');
  });
}).then((res) => {
  console.log(res);
  return new Promise((resolve, reject) => {
    resolve('任务三成功');
  });
}, err => {
  console.log(err);
  return new Promise((resolve, reject) => {
    resolve('任务三失败');
  });
}).then((res) => {
  console.log(res);
  return new Promise((resolve, reject) => {
    resolve('任务四成功');
  });
}).then((res) => {
  console.log(res);
  return new Promise((resolve, reject) => {
    resolve('任务五成功');
  });
});
console.log(p1);
setTimeout(() => {
  console.log(res);
}, 1000);

</script> -->

<!-- interface接口定义数据类型，如果含有其他属性会报错 -->
<!-- <script setup lang="ts">
import { reactive,ref } from 'vue';
interface LoginInfo {
    username: string;
    password: string;
}
const param = reactive<LoginInfo>({
    username: 'fw',
    password: '123456',
});
const param1 = ref<LoginInfo>({
    username: 'fw',
    password: '123456',
});
console.log(param.username);
console.log(param1.value.username);

</script> -->

<!-- pinia测试 -->
<template>
  <!-- <div>  {{ todosStore }} -->
  <!-- </div> -->
  <div class="main">
    <!-- <div>
    所有待做清单{{ todos.todos }}
  </div> -->
    <WeatherDisplay />
    <div class="finished">
      x未完成清单
      <div class="list" v-for="(item, index) in todosStore.unfinishedTodos" :key="item.id">
        <!-- 复选框，当点击取消的时候同步修改item.isFinished -->
        <input class="checkBox" type="checkbox" v-model="item.isFinished" />
        {{ item.text }}
      </div>
      √已完成清单
      <div class="list" v-for="(item, index) in todosStore.finishedTodos" :key="item.id">
        <!-- 复选框，当点击取消的时候同步修改item.isFinished -->
        <input type="checkbox" v-model="item.isFinished" />
        {{ item.text }}
      </div>
    </div>
    <!-- “+添加任务”按钮 -->
     <div class="input">
    <div class="addTask" @click="toggleInput">
      +添加任务
    </div>
    <!-- 一个输入框提交信息,点击回车之后输入框里面的信息清空 -->
    <input  v-if="showInput" class="todo" placeholder="请输入待办事项" type="text" @keydown.enter="addTodo" v-model="newTodoText" />
  </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodos } from '@/stores/todos';
import WeatherDisplay from '@/views/webTest/weatherdisplay.vue';
const todosStore = useTodos()

let newTodoText = ref(""); // 双向绑定的输入值
let showInput = ref(false); // 控制输入框的显示与隐藏
// 提交方法
function addTodo(e: any) {
  if (e.target.value.trim() === "") return; // 非空校验
  // 调用Store的addTodo方法
  todosStore.addTodo(e.target.value);
  // 清空输入框
  newTodoText.value = "";
  showInput.value = false; // 提交后隐藏输入框
  console.log(localStorage);
}

// 控制输入框的显示
function toggleInput() {
  showInput.value = !showInput.value;
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  background-image: url("@/assets/daibanbj.jpg");
  height: 100vh;
  margin: 0;
  background-size: cover;
}

.finished {
  color: rgb(255, 255, 255);
  // background-color: rgba(93, 143, 168, 0.738);
  width: 800px;
  height: 30px;
  margin: 10px;
  text-shadow:
    2px 2px 4px rgba(0, 0, 0, 0.5),
    -2px -2px 4px rgba(255, 255, 255, 0.3);
}

.list {
  color: #ffffff;
  line-height: 40px;
  background-color: #00000077;
  height: 40px;
  margin: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  /* 玻璃质感的透明边框 */
  border-radius: 8px;
  /* 圆角，增加光滑感 */
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.4);
  /* 内阴影增强玻璃效果 */
}

.checkBox {
  margin: 10px;
  width: 15px;
  height: 15px;
}

/* +添加任务按钮样式 */
.addTask {
  width: 400px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  background-color: #ffffffbd;
  border: 1px solid #2c769664;
  cursor: pointer;
  border-radius: 8px;
}

.todo {
  width: 400px;
  height: 40px;
  margin: 10px;
  // border-radius: 20px;
  margin-top: 10px; /* 确保输入框距离按钮有一定的间距 */
  padding: 10px;
  font-size: 20px;
  background-color: #ffffffbd;
  border: 1px solid #2c769664;
}
</style>
