<template>
  <div>
    <header>
      <div class="content">
        <!-- <div class="erweima">[ - ]</div> -->
        <div class="name">long</div>
        <div class="iconfont icon-settings" @click="test"></div>
      </div>
    </header>

    <nav>
      <div class="top">
        <div class="left">
          <!-- <div class="name">long</div> -->
          <div class="home">我的个人主页 ></div>
        </div>
        <div class="right">
          <img src="../assets/images/mayun.jpg" alt srcset />
        </div>
      </div>
      <div class="bottom">
        <div class="item">
          <div>9</div>
          <div class="nav-text">沟通过</div>
        </div>
        <div class="item">
          <div>9</div>
          <div class="nav-text">沟通过</div>
        </div>
        <div class="item">
          <div>9</div>
          <div class="nav-text">沟通过</div>
        </div>
        <div class="item">
          <div>9</div>
          <div class="nav-text">沟通过</div>
        </div>
      </div>
    </nav>

    <section>
      <div class="content">
        <div class="item1">
          <a class="zhushou">
            <span>求职助手</span>
            <span>多种道具助你提升求职成功率</span>
          </a>
          <a>
            <span class="iconfont icon-privacy"></span>
            <span>我的微简历</span>
          </a>
          <a>
            <span class="iconfont icon-privacy"></span>
            <span>附件简历</span>
          </a>
          <a>
            <span class="iconfont icon-addto"></span>
            <span>管理求职意向</span>
          </a>
        </div>
        <div class="item2">
          <a>
            <span class="iconfont icon-voice"></span>
            <span>牛人问答</span>
          </a>
          <a>
            <span class="iconfont icon-collection"></span>
            <span>关注公司</span>
          </a>
          <!-- <a>
            <span class="iconfont"></span>
            <span>隐私设置</span>
          </a>-->
        </div>

        <div class="item4">
          <a>
            <span class="iconfont icon-information"></span>
            <span>帮助与反馈</span>
          </a>
          <!-- <a>
            <span class="iconfont"></span>
            <span>首都网警</span>
          </a>-->
        </div>
      </div>
    </section>
    <button style="color:red;" @click="logout">退出登录</button>

    <footer>
      <div class="content">
        <div>
          <span>客服电话：400-065-5799</span>
          <span>工作时间：9.30-18.30</span>
        </div>
        <div>
          <span>用户协议|经营执照|防骗指南|首都网警</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
import axios from 'axios';
import eventVue from '../bus';



export default {
  data() {
    return {
      isLogouting: false,
    };
  },
  methods: {
    // 注销
    logout() {
      window.localStorage.removeItem('token');
      this.$router.push('/login');
    },
    test() {
      axios({
        method: 'get',
        url: 'http://localhost:3000/usercenter',
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // data: qs.stringify(data)
        //   email: this.email,
        //   username: this.username,
        //   password: this.password,
        //   re_password: this.re_password
        //   email,
        //   username,
        //   password,
        //   re_password
        // }
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {},
  // mounted(){
  //   this.test()
  // }
};
</script>

<style scoped lang="scss">
div {
  // background-color: #eee;
  header {
    width: 100%;
    height: 40px;
    color: #fff;

    .content {
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      justify-items: center;
      line-height: 40px;
      position: fixed;
      height: 40px;
      width: 100%;
      background-color: #53cac3;
      .icon-settings {
        // width: 1rem;
        font-size: 2.1875rem;
      }
    }
  }

  nav {
    width: 100%;
    height: 10rem;

    .top {
      padding: 1.875rem 0.625rem;
      background-color: #53cac3;
      height: 5.625rem;
      width: 100%;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .right {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .bottom {
      display: flex;
      background-color: #fff;
      height: 70px;
      width: 100%;
      justify-content: space-around;
      // overflow: hidden;
      border: 10px solid transparent;
      .item {
        // margin:5px -20px;
        // padding: 10px 0;
        width: 25%;
        height: 40px;
        text-align: center;
        .nav-text {
          padding-top: 5px;
          font-size: 12px;
          color: #aaa;
        }
      }
    }
  }

  section {
    // overflow: hidden;
    height: 425px;
    .content {
      // margin: 10px 0;
      .iconfont {
        font-size: 30px;
        // line-height: 30px;
      }
      background: #fff;
      div::before {
        display: block;
        content: '';
        width: 100%;
        height: 10px;
        background-color: #eee;
      }

      a {
        display: block;
        color: #000;
        // margin: 20px;
        padding: 15px;
      }
      span {
        // line-height: 31px;
        vertical-align: middle;
      }

      .item1 {
        .zhushou {
          // height: 50px;
          // line-height: 50px;
          display: flex;
          flex-direction: column;
          span:nth-child(2) {
            color: #999;
            font-size: 13px;
          }
        }
        a {
          display: block;
          color: #000;
        }
      }
    }
  }

  footer {
    width: 100%;
    height: 110px;
    // margin-bottom: 70px;
    // background-color: #aaa;

    .content {
      // margin: 20px 20px;
      color: #aaa;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
