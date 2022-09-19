Vue.createApp({
  data() {
    return {
      color: true,
      isChange: true,
      message: 'hello',
      result: '',
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
    }
  },
  created() {
  },
  watch: {
  },
}).mount('#app');