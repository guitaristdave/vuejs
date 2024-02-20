Vue.component("counter", {
  data() {
    return {
      count: 0,
    };
  },

  template: `
    <div>
      <h2> Task 1. Simple Counter Component</h2>
      <p>{{ count }}</p>
      <button @click="decrease">-</button>
      <button @click="increase">+</button>
    </div>
  `,
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
});
