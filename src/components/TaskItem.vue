<template>
  <li :class="{ completed: task.completed }">
    <input type="checkbox" :checked="task.completed" @change="toggleTask" />
    <span>{{ task.text }}</span>
    <button @click="removeTask">Удалить</button>
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
.completed {
  text-decoration: line-through;
}
</style>