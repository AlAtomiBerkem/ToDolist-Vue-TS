<template>
  <div class="task-list">
    <TaskInput />
  </div>
</template>

<script setup lang="ts">
import TaskInput from "./TaskInput.vue";
</script>






<style scoped>
  .task-list{
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 400px;
    background: rgba(128, 128, 128, 0.3);
    border: 3px solid rgba(128, 128, 128, 0.5);
    border-radius: 10px;
  }
</style>