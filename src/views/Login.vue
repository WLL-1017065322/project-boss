<template>
  <div class="login-bg">
    <div id="login">
      <h3>登录BOSS直聘</h3>
      <form v-on:submit.prevent="login" method="post">
        <div class="login-btn">
          <span class="login-btn1 cur" @click="isPhone=false" :class="{isPhone:!isPhone}">密码登录</span>
          <span class="login-btn2" @click="isPhone=true" :class="{isPhone:isPhone}">短信登录(未完)</span>
        </div>
        <div class="info-login" v-if="!isPhone">
          <input type="text" placeholder="邮箱" v-model="model.email" />
          <input type="password" placeholder="密码" v-model="model.password" />
          <input type="button" value="请向右滑动组件" />
          <input type="submit" value="登录" />
        </div>

        <div class="info-login" v-else>
          <input type="text" placeholder="手机号" />
          <input type="button" value="请向右滑动组件" />
          <span class="verification-send">
            <input type="text" placeholder="短信验证码" />
            <button class="verification-btn">发送验证码</button>
          </span>
          <input type="submit" value="登录" />
        </div>
      </form>

      <!-- 底部 -->

      <div class="login-footer">
        <span>
          没有账号？
          <!-- <a href>立即注册</a> -->
          <router-link to="/register">立即注册</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { setTimeout } from 'timers';
import qs from 'qs';
import eventVue from '../bus';

export default {
  name: '',
  data() {
    return {
      isPhone: false,
      phoneNumber: '',
      password: '',
      accounts: [],
      swiperList: [],

      apiAhoneNumber: '',
      apiPassword: '',

      model: {
        email: '',
        password: '',
      },
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async login() {
      const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      if (!emailReg.test(this.model.email)) {
        this.$message({
          type: 'success',
          message: '密码或邮箱不合法',
        });
        return;
      }

      const res = await this.$http.post('login', this.model);
      console.log(res);
      localStorage.token = res.data.token;
      this.$router.push('/joblist');
      this.$message({
        type: 'success',
        message: '登录成功',
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background: #fff;

  // background: linear-gradient(to bottom, #a46e92 0%,#27455d 100%)

  h3 {
    color: #5dd5c8;
    text-align: center;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.5px;
    position: relative;
  }

  form {
    padding-top: 20px;
    margin: 0 15px;
    .login-btn {
      display: flex;
      justify-content: space-between;
      height: 4.7692rem;
      // margin-bottom: 44px;
      text-align: center;
      // padding-bottom: 0px;
      // 处理元素空白
      white-space: nowrap;
      padding: 3px 0 8px 0;

      //   @media (max-width: 800px) {
      //     display: table;
      //     width: 100%;
      //     border-bottom-width: 0;
      //   }
      .isPhone {
        font-size: 1rem;
        color: #414a60;
        border-bottom: 2px solid #62d5c8;
      }

      span {
        display: inline-block;
        width: 70px;
        font-size: 0.875rem;
        line-height: 0.875rem;
        color: #9fa3b0;
        // margin: 0 28px -2px;
        padding: 8px 0 15px;
        height: 1rem;
        border-bottom: 2px solid #f2f5f9;
        box-sizing: content-box;
        cursor: pointer;
        // width: 50%;
        @media (max-width: 800px) {
          //============
          display: table-cell;
          width: 50%;
          text-align: center;
          padding-top: 8px;
        }
        // .cur {
        //   border-bottom-color: #62d5c8;
        //   font-size: 16px;
        //   color: #414a60;
        // }
        .login-btn1 {
          margin-left: 0;
        }
        .login-btn2 {
          text-align: center;
        }
      }
      // span:hover {
      //   color: #414a60;

      //   border-bottom-color: #62d5c8;
      // }
    }
    .info-login {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      input {
        margin: 18px 0;
        width: 100%;
        height: 42px;
      }

      input:nth-child(4) {
        background: #5dd5c8;
        border: 0;
        color: #fff;
      }
      .verification-send {
        position: relative;
        .verification-btn {
          height: 25px;
          position: absolute;
          right: 6px;
          top: 25px;
          border: 0;
          border-left: 1px solid#9fa3b0;
          color: #5dd5c8;
        }
      }
    }
  }

  .login-footer {
    text-align: center;
    span {
      color: #aaa;
      font-size: 14px;
      a {
        color: #5dd5c8;
      }
    }
  }
}
</style>
