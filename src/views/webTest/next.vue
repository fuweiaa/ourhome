<!--
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2025-02-24 10:12:06
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2025-02-24 10:13:30
 * @FilePath: \ourhome\src\views\webTest\next.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE{{todos}}
-->
<template>
{{ todos.todos }}
</template>

<script setup lang="ts">
import { useTodos } from '@/stores/todos';

const todos = useTodos()
</script>

<style lang="scss" scoped>

</style>