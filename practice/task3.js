Vue.component("filter-comp", {
  data() {
    return {
      filterText: "",
      elements: ["list1", "list2", "list3", "list33"],
    };
  },

  template: `
    <div>
        <h2>Task 3. Simple Filter</h2>
        <input type="text" placeholder="Фильтр" v-model="filterText">
        <ul>
            <li v-for="item in filteredList" :key="item">{{ item }}</li>
        </ul>
    </div>
    `,
  computed: {
    filteredList() {
      return this.elements.filter((item) => {
        return item.toLowerCase().includes(this.filterText.toLowerCase());
      });
    },
  },
});
