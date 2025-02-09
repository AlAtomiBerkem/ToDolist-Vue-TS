<template>
  <div class="task-input">
    <input class="input"
        type="text"
        v-model="input"
        id="name"
        name="name"
        required
        minlength="1"
        maxlength="100"
        placeholder="введите свою задачу"
    />
    <p>{{ input }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '' // Инициализируем строку для связывания с элементом ввода
    };
  }
};
</script>

<style scoped>
.input {
  width: 60%; /* Полная ширина контейнера */
  padding: 10px; /* Внутренние отступы */
  margin: 10px 0; /* Внешние отступы */
  font-size: 16px; /* Размер шрифта */
  font-family: Arial, sans-serif; /* Шрифт */
  border-radius: 5px; /* Скругление углов */
  box-sizing: border-box; /* Включает padding и border в общую ширину */
  transition: border-color 0.3s ease;
  background: darkgrey;
}
</style>
