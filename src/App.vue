<template>
  <div>
    <h1>ToDo List</h1>
    <TaskInput />
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import TaskInput from './components/TaskInput.vue';
import TaskList from './components/TaskList.vue';
</script>