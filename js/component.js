// Vue.createApp({})
// .component('my-hello', {
//   template: '<div>こんにちは、{{ name }}!</div>',
//   data() {
//     return {
//       name: 'Vue.js'
//     };
//   }
// }).mount('#app');

const Mychild = {
  template: '<div>今日へ、Comp2</div>'
};
const Myparent = {
  components: {
    'my-child': Mychild,
  },
  template: '<div>今日へ</div><my-child></my-child>'
};

Vue.createApp({
  components: {
    'my-parent': Myparent,
    'my-child': Mychild,
  }
}).mount('#app')