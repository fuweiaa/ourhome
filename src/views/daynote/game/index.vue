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
    <div class="game">
        <Gametitle />
    </div>
    <div class="content">
        <Guessnumber />
        <Landmouse />
    </div>
</template>

<script setup lang="ts">
import Guessnumber from "../game/guessnumber.vue"
import Gametitle from "../game/gametitle.vue"
import Landmouse from "../game/landmouse.vue"
</script>

<style lang="scss" scoped>
#myhead {
    display: flex;
    width: 100%;
    flex-direction: column;
    /* 添加垂直堆叠 */
}

.game {
    width: 100%;
    height: auto;
}

.content {
    display: flex;
    width: 100%;
}
</style>