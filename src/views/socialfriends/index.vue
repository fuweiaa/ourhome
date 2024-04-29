<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 10:24:45
<<<<<<< HEAD
 * @LastEditors: yy
 * @LastEditTime: 2024-04-28 16:28:14
=======
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-29 15:44:57
>>>>>>> 6b91e6a6be756c766c96c632bec1d760f8b06024
 * @FilePath: \bigevent-vue3\src\views\socialfriends\index.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template id="myhead">
    <div>
        <Pyqhead />
        <Zmd />
        <Card />
    </div>
</template>

<script setup lang="ts">
import Pyqhead from "@/views/socialfriends/charts/pyqhead.vue";
import Card from "@/views/socialfriends/charts/card.vue";
import Zmd from '../socialfriends/charts/zmd.vue'


</script>

<style lang="scss" scoped>
#myhead {
    margin-left: 0%;
    margin-top: 0%;
    width: 100%;
}
</style>