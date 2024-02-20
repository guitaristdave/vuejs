Vue.component("task-manager", {
  data() {
    return {
      newTask: "",
      tasks: ["Default Task"],
    };
  },

  template: `
    <div>
    <h2>Task 2. Simple Task Manager</h2>
        <input type="text" v-model="newTask">
        <button @click="addTask">Добавить</button>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">{{ task }} <button @click="deleteTask(index)">X</button></li>
        </ul>
    </div>
    `,
  methods: {
    addTask() {
      if (this.newTask !== "") {
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});
