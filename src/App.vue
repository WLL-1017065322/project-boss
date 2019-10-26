<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <footer-guide v-show="!this.$route.meta.isPublic"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide';
export default {
  name: 'app',
  data() {
    return {};
  },
  watch: {
    // 如果路由变化，执行函数
  },
  mounted() {},
  components: { FooterGuide },

  methods: {
    // 网页拦截
    // checkLogin() {
    //   console.log(this.$route.path);
    //   //检测是否存在session
    //   if (!this.getCookie("session")) {
    //     if (this.$route.path == "/register") {
    //       this.$router.push("/register");
    //     } else {
    //       this.$router.push("/");
    //     }
    //   } else {
    //     this.$router.push(this.$route.path);
    //     // this.$router.push(this.$route.path)
    //   }
    // }
  }
};
</script>


<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

* {
  margin: 0;
  padding: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leve-to {
  opacity: 0;
}
</style>
