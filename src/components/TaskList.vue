<template>
  <div class="task-list">
    <div class="filters">
      <button @click="filter = 'all'" :class="{ active: filter === 'all' }">Все</button>
      <button @click="filter = 'completed'" :class="{ active: filter === 'completed' }">Выполненные</button>
      <button @click="filter = 'uncompleted'" :class="{ active: filter === 'uncompleted' }">Невыполненные</button>
    </div>
    <ul>
      <transition-group name="fade">
        <TaskItem v-for="task in filteredTasks" :key="task.id" :task="task" />
      </transition-group>
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

<style scoped>
.task-list {
  margin-top: 20px;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filters button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  font-size: 14px;
}

.filters button.active {
  background-color: darkgreen;
  color: white;
  border-color: #42b983;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>