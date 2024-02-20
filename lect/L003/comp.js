const compItem = {
  name: "comp-item",
  template: `<p>item info</p>`,
};

Vue.component("new-component", {
  props: [
    "title"
  ],

  data() {
    return {
      counter: 0,
    };
  },

  components: {
    comp: compItem,
  },

  methods: {
    increase(step) {
      this.counter += step;
    },
  },

  template: `
    <div>
    <h3>{{ title }}</h3>
    <comp></comp>
    <p>counter click {{counter}}</p>
    <button @click="increase(2)">+2</button>
    </div>
    `,
});
