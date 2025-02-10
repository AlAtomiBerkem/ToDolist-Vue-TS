<template>
  <div>
    <div>
      <button @click="filter = 'all'">Все</button>
      <button @click="filter = 'completed'">Выполненные</button>
      <button @click="filter = 'uncompleted'">Невыполненные</button>
    </div>
    <ul>
      <TaskItem v-for="task in filteredTasks" :key="task.id" :task="task" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTodoStore } from '../stores/taskItemStore.ts';
import TaskItem from './TaskItem.vue';

const filter = ref<'all' | 'completed' | 'uncompleted'>('all');
const todoStore = useTodoStore();

const filteredTasks = computed(() => {
  if (filter.value === 'completed') return todoStore.completedTasks;
  if (filter.value === 'uncompleted') return todoStore.uncompletedTasks;
  return todoStore.tasks;
});
</script>