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


<style>
body {
  font-family: Arial, sans-serif;
  background-color: rgb(63,180,155);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.app {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}
</style>