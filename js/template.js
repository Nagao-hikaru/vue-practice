Vue.createApp({
  data: function() {
    return {
      message: 'みなさんこんにちは',
      url: 'https://media.connec10.co.jp/',
      email: 'Y-Suzuki@example.com',
      current: new Date().toLocaleString(),
    };
  },
  computed: {
    localEmail: function () {
      return this.email.split('@')[0].toLowerCase();
    },
    random: function () {
      return Math.random();
    }
  },
  methods: {
    onclick: function () {
      this.current = new Date().toLocaleString();
    },
    randomm: function () {
      return Math.random();
    }
  }
}).mount('#app');