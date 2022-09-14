Vue.createApp({
  data() {
    return {
      message: 'みなさんこんにちは',
      url: 'https://media.connec10.co.jp/',
      email: 'Y-Suzuki@example.com',
      current: new Date().toLocaleString(),
      cur: new Date().toLocaleString(),
      name: '',
      os: [
        'Windows',
        'macOS',
      ],
      show: true,
      books: [
        {
          isbn: '978',
          title: 'Java勉強',
          price: 2800,
        },
        {
          isbn: '928',
          title: 'python勉強',
          price: 2501,
        },
        {
          isbn: '9738',
          title: 'php勉強',
          price: 2400,
        },
        {
          isbn: '958',
          title: 'ruby勉強',
          price: 2500,
        },
      ],
      list: [
        '赤パジャマ',
        '黄パジャマ',
        '青パジャマ',
      ]
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
    onclick() {
      this.list.shift();
    }
  },
  created() {
  },
  watch: {
  },
}).mount('#app');