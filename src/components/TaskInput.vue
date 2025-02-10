<template>
  <form @submit.prevent="addTask" class="task-input">
    <input v-model="taskText" placeholder="Добавьте задачу" class="input" />
    <button type="submit" class="button">Добавить</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTodoStore } from '../stores/taskItemStore.ts';

const taskText = ref('');
const todoStore = useTodoStore();
const error = ref('');

watch(() => todoStore.error, (newError) => {
  error.value = newError;
});

const addTask = () => {
  todoStore.addTask(taskText.value);
  taskText.value = '';
};
</script>

<style scoped>
.task-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.button {
  padding: 10px;
  background-color: darkgreen;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #3aa876;
}

.error {
  color: red;
  margin: 0;
  font-size: 14px;
}
</style>