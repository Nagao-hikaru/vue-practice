Vue.createApp({
  created() {
    this.interval = setInterval(() => {
      this.current = (this.current + 1) % this.components.length;
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  computed: {
    currentBanner() {
      return 'banner-' + this.components[this.current];
    }
  },
  data() {
    return {
      current: 0,
      components: ['member', 'new', 'env']
    }
  }
})
  .component('banner-member', {
    template: '<h3>メンバー募集</h3>'
  })
  .component('banner-new', {
    template: '<h3>新メンバー募集</h3>'
  })
  .component('banner-env', {
    template: '<h3>いい環境</h3>'
  }).mount('#app')