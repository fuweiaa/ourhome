<template>
  <div class="chat-container">
    <div class="chat-header">聊天框</div>
    <div class="chat-messages" ref="messagesContainer">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.type]">
        {{ message.content }}
      </div>
    </div>
    <div class="chat-input">
      <input v-model="inputMessage" @keyup.enter="sendMessage" placeholder="输入消息..." />
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

const messages = ref<{ content: string; type: 'user' | 'assistant' }[]>([]);
const inputMessage = ref('');
const messagesContainer = ref<HTMLElement | null>(null);

/**
 * 发送消息
 */
const sendMessage = () => {
  if (inputMessage.value.trim()) {
    messages.value.push({ content: inputMessage.value, type: 'user' });
    inputMessage.value = '';

    // 模拟回复
    setTimeout(() => {
      messages.value.push({ content: '已收到您的消息', type: 'assistant' });
      scrollToBottom();
    }, 500);

    scrollToBottom();
  }
};

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

onMounted(() => {
  messages.value.push({ content: '欢迎使用聊天框', type: 'assistant' });
  scrollToBottom();
});
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.chat-header {
  padding: 10px;
  background-color: #f0f0f0;
  font-weight: bold;
}

.chat-messages {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 12px; // 添加圆角边框
  max-width: 70%;
}

.message.user {
  background-color: rgb(121, 119, 119);
  margin-left: auto;
  text-align: right;
}

.message.assistant {
  background-color: #fffb00;
  margin-right: auto;
  text-align: left;
}

.chat-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.chat-input input {
  flex: 1;
  margin-right: 10px;
  padding: 8px;
}

.chat-input button {
  padding: 8px 16px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #1976d2;
}
</style>