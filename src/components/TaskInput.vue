<template>
  <form @submit.prevent="addTask">
    <input v-model="taskText" placeholder="Добавьте задачу" />
    <button type="submit">Добавить</button>
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
.error {
  color: red;
  margin-top: 10px;
}
</style>