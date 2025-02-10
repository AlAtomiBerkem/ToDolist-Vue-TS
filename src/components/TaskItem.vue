<template>
  <li :class="{ completed: task.completed }" class="task-item">
    <input type="checkbox" :checked="task.completed" @change="toggleTask" class="checkbox" />
    <span class="text">{{ task.text }}</span>
    <button @click="removeTask" class="remove-button">×</button>
  </li>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { useTodoStore } from '../stores/taskItemStore.ts';

const props = defineProps <{ task: { id: number; text: string; completed: boolean } }>();

const todoStore = useTodoStore();

const toggleTask = () => {
  todoStore.toggleTask(props.task.id);
};

const removeTask = () => {
  todoStore.removeTask(props.task.id);
};
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: white;
}

.task-item.completed .text {
  text-decoration: line-through;
  color: #888;
}

.checkbox {
  margin-right: 10px;
}

.text {
  flex-grow: 1;
  font-size: 16px;
}

.remove-button {
  background: none;
  border: none;
  color: #ff5c5c;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
}

.remove-button:hover {
  color: #ff1c1c;
}
</style>