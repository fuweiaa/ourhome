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
  <div class="finished">
    未完成清单
    <div class="list" v-for="(item, index) in todosStore.unfinishedTodos" :key="item.id">
      <!-- 复选框，当点击取消的时候同步修改item.isFinished -->
      <input class="checkBox" type="checkbox" v-model="item.isFinished" />
      {{ item.text }}
    </div>
    已完成清单
    <div class="list" v-for="(item, index) in todosStore.finishedTodos" :key="item.id">
      <!-- 复选框，当点击取消的时候同步修改item.isFinished -->
      <input type="checkbox" v-model="item.isFinished" />
      {{ item.text }}
    </div>
  </div>
  <!-- 一个输入框提交信息,点击回车之后输入框里面的信息清空 -->
    <input class="todo" placeholder="请输入待办事项" type="text" @keydown.enter="addTodo" v-model="newTodoText" /> 
  </div>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import { useTodos } from '@/stores/todos';
const todosStore = useTodos()

let newTodoText = ref(""); // 双向绑定的输入值

// 提交方法
function addTodo(e:any) {
  if (e.target.value.trim() === "") return; // 非空校验
  // 调用Store的addTodo方法
  todosStore.addTodo(e.target.value);
  // 清空输入框
  newTodoText.value = "";
  console.log(localStorage);
}
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  justify-content: center;
}
.finished{
  color: rgb(156, 196, 233);
  background-color: rgb(250, 250, 225);
  width: 800px;
  height: 40px;
}
.list{
  color: #2c9678;
  line-height: 40px;
  background-color: #e9ccd3;
  height: 40px;
  margin: 10px;
  // 圆角边框
  border-radius: 20px;
}
.checkBox{
  margin: 10px;
  width: 15px;
  height: 15px;
}
.todo{
  width: 400px;
  height: 40px;
  margin: 10px;
  border-radius: 20px;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #2c9678;
}
</style>
