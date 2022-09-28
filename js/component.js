Vue.createApp({})
  .component('my-counter', {
    props: ['step'],
    emits: ['plusMinus'],
    template: '<button type="button" @click="onclick">{{ step }}</button>',
    data() {
      return {
        current: 0
      };
    },
    methods: {
      onclick() {
        this.$emit('plusMinus', Number(this.step));
      }
    }
  }).mount('#app')