import { defineStore } from 'pinia';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export const useTodoStore = defineStore('todo', {
    state: () => ({
        tasks: [] as Task[],
        nextId: 1,
        error: '', // Состояние для ошибки
    }),
    actions: {
        addTask(text: string) {
            if (!text.trim()) {
                this.error = 'Ошибка: нельзя добавлять пустые задачи';
                return;
            }
            this.error = ''; // Очищаем ошибку, если задача не пустая
            this.tasks.push({ id: this.nextId++, text, completed: false });
        },
        removeTask(id: number) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        },
        toggleTask(id: number) {
            const task = this.tasks.find(task => task.id === id);
            if (task) task.completed = !task.completed;
        },
    },
    getters: {
        completedTasks(): Task[] {
            return this.tasks.filter(task => task.completed);
        },
        uncompletedTasks(): Task[] {
            return this.tasks.filter(task => !task.completed);
        },
    },
});