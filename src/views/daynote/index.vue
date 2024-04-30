<!--
 * @Author: yy
 * @Date: 2024-04-29 16:39:45
 * @LastEditors: yy
 * @LastEditTime: 2024-04-29 16:40:14
 * @FilePath: \bigevent-vue3\src\views\daynote\index.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template id="myhead">
    <div class="container">
        <Daynotehead />
        <div class="content">
            <Book class="book-component" />
            <Draw />
            <Poem />
        </div>
    </div>
</template>

<script setup lang="ts">
import Daynotehead from "../daynote/daynotehead.vue"
import Book from "../daynote/book.vue"
import Draw from "../daynote/draw.vue"
import Poem from "../daynote/poem.vue"
//   export default {
//     name: 'index',
//     components:{
//       Card,
//       zmd
//     }
//   }

</script>

<style lang="scss" scoped>
#myhead {
    margin-left: 0%;
    margin-top: 0%;
    width: 100%;
}

.container {
    display: flex;
    flex-direction: column;
}

.content {
    display: flex;
    width: 100%;
}

.component-container {
    display: flex;
}

.Book {
    width: 70%;
}

.book-component {
    margin-right: 150px;
    /* 调整 Book 组件的右边距 */
}

.Draw {
    width: 30%;
}

.Poem {
    width: 30%;
}
</style>