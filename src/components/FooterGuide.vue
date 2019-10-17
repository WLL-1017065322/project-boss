<template>
  <div class="home">
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/joblist" class="mui-tab-item" href="#tabbar">
        <span class="mui-icon iconfont">&#xe638;</span>
        <span class="mui-tab-label">职位</span>
      </router-link>
      <router-link to="/company" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon iconfont">
          &#xe65c;
          <!-- <span class="mui-badge">9</span> -->
        </span>
        <span class="mui-tab-label">公司</span>
      </router-link>
      <router-link to="/message" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon iconfont">&#xe635;</span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link to="/aboutme" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon iconfont">&#xe624;</span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {}
};
</script>

<style scoped lang="scss">
// 引入字体样式
@import '../assets/styles/css/mui.css';
@font-face {
  font-family: 'iconfont';
  src: url('../assets/styles/alfont/iconfont.eot');
  src: url('../assets/styles/alfont/iconfont.eot?#iefix')
      format('embedded-opentype'),
    url('../assets/styles/alfont/iconfont.woff2') format('woff2'),
    url('../assets/styles/alfont/iconfont.woff') format('woff'),
    url('../assets/styles/alfont/iconfont.ttf') format('truetype'),
    url('../assets/styles/alfont/iconfont.svg#iconfont') format('svg');
}

.iconfont {
  font-family: 'iconfont' !important;
  // font-size: 1.6rem;
  font-size: 25px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.banner {
  position: absolute;
  bottom: 0;
}

.router-link-active {
  color: #53cac3;
}

// 组件切换的动画



</style>
