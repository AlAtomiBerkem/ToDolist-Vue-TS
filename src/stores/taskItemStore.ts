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
        error: '',
    }),
    actions: {
        addTask(this: any, text: string) {
            if (!text.trim()) {
                this.error = 'Ошибка: нельзя добавлять пустые задачи';
                return;
            }
            this.error = '';
            this.tasks.push({ id: this.nextId++, text, completed: false });
        },
        removeTask(this: any, id: number) {
            this.tasks = this.tasks.filter((task: Task) => task.id !== id);
        },
        toggleTask(this: any, id: number) {
            const task = this.tasks.find((task: Task) => task.id === id);
            if (task) task.completed = !task.completed;
        },
    },
    getters: {
        completedTasks(state): Task[] {
            return state.tasks.filter(task => task.completed);
        },
        uncompletedTasks(state): Task[] {
            return state.tasks.filter(task => !task.completed);
        },
    },
});
