Vue.createApp({
  data() {
    return {
      color: true,
      isChange: true,
      message: 'hello',
      result: '',
      name: '匿名',
    };
  },
  computed: {
    localEmail() {
      return this.email.split('@')[0].toLowerCase();
    },
    random: function () {
      return Math.random();
    },
    expensiveBooks: function () {

      return this.books.filter(b => b.price >= 2500);
    }
  },
  methods: {
    onchange() {
    },
    changeColor() {
      this.$refs.reftest.style.background = '#0FF'
    },
    onClick() {
      this.result = Math.floor(Math.random() * 100) + 1;
    },
    onParentClick() {
      console.log('parent')
    },
    onMyClick() {
      console.log('myclick')
    },
    onChildClick() {
      console.log('child')
    },
    clear() {
      this.name = '';
    }
  },
  created() {
  },
  watch: {
  },
}).mount('#app');