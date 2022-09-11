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
      kazu: {},
    };
  },
  computed: {
    localEmail() {
      return this.email.split('@')[0].toLowerCase();
    },
    random: function () {
      return Math.random();
    }
  },
  methods: {
    onchange() {
    },
    changeColor() {
      this.$refs.reftest.style.background = '#0FF'
    }
  },
  created() {
  },
  watch: {
  },
}).mount('#app');