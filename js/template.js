Vue.createApp({
  data() {
    return {
      message: 'みなさんこんにちは',
      url: 'https://media.connec10.co.jp/',
      email: 'Y-Suzuki@example.com',
      current: new Date().toLocaleString(),
      cur: new Date().toLocaleString(),
    };
  },
  renderTracked(e) {
    console.log('renderTracked')
    console.log(e)
  },
  renderTriggered(e) {
    console.log('renderTri')
    console.log(e)
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
    onclick() {
      this.current = new Date().toLocaleString();
    },
    randomm: function () {
      return Math.random();
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.cur = new Date()
    }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  }
}).mount('#app');