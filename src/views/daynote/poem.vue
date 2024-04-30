<template>
    <div class="notebook">
        <h4>此情此景，好想吟诗一首</h4>
        <div class="toolbar">
            <button @click="startWriting">开始写诗</button>
            <button @click="savePoem">保存</button>
            <button @click="showHistory">历史保存</button>
        </div>
        <div class="content" v-if="writing">
            <textarea v-model="poemContent" placeholder="在这里写下你的诗歌"></textarea>
        </div>
        <div class="history" v-if="showingHistory">
            <ul>
                <li v-for="(poem, index) in savedPoems" :key="index">{{ poem }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const writing = ref(false);
const showingHistory = ref(false);
const poemContent = ref('');
const savedPoems = ref([]);

const startWriting = () => {
    writing.value = true;
};

const savePoem = () => {
    if (poemContent.value.trim() !== '') {
        savedPoems.value.push(poemContent.value.trim());
        poemContent.value = '';
        writing.value = false;
    }
};

const showHistory = () => {
    showingHistory.value = true;
};
</script>

<style scoped>
.notebook {
    position: relative;
    border: 1px solid #ccc;
    padding: 20px;
    width: 400px;
    height: 470px;
    margin-right: 20px;
}

.toolbar button {
    margin-right: 10px;
}
</style>