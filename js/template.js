Vue.createApp({
  data() {
    return {
      message: 'みなさんこんにちは',
      url: 'https://media.connec10.co.jp/',
      email: 'Y-Suzuki@example.com',
      current: new Date().toLocaleString(),
      cur: new Date().toLocaleString(),
      name: '',
      upperName: '',
      path : 'https://www.web-deli.com/image/linkbanner_1.gif',
    };
  },
  // renderTracked(e) {
  //   console.log('renderTracked')
  //   console.log(e)
  // },
  // renderTriggered(e) {
  //   console.log('renderTri')
  //   console.log(e)
  // },
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
    },
    getUpper() {
      this.upperName = this.name.toUpperCase();
    },
    onclick() {
      this.message = new Date().toLocaleString();
    },
    onmousesenter() {
      this.path = 'https://www.web-deli.com/image/home_chara.gif';
    },
    onmouseleave() {
      this.path = 'https://www.web-deli.com/image/linkbanner.gif';
    }
  },
  created() {
  },
  watch: {
  },
}).mount('#app');