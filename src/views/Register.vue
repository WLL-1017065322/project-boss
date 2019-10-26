<template>
  <div class="register-bg">
    <div id="register">
      <h3>注册BOSS直聘</h3>
      <form
        v-on:submit.prevent="register"
        method="post"
        enctype="application/x-www-form-urlencoded"
      >
        <div class="info-register">
          <input type="text" placeholder="请输入邮箱" v-model="model.email" />
          <input type="text" placeholder="请设置用户名" v-model="model.username" />
          <!-- <input type="button" value="请向右滑动组件" /> -->
          <input type="password" placeholder="请输入密码" v-model="model.password" maxlength="16" />
          <input type="password" placeholder="请再次输入密码" v-model="model.re_password" />
          <!-- <input type="submit" value="注册" @click="register" /> -->
          <input type="submit" value="注册" class="btn-submit" />
        </div>

        <!-- <div class="info-register">
          <input type="text" value="手机号">
          <input type="text" value="密码">
          <input type="button" value="请向右滑动组件">
          <input type="button" value="登录">
        </div>-->
      </form>

      <!-- 底部 -->

      <div class="register-footer">
        <span>
          已有账号？
          <!-- <a href>立即注册</a> -->
          <router-link to="/">直接登录</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: '',
  data() {
    return {
      model: {
        // email: "",
        // username: "",
        // password: "",
        // re_password: ""
      }
    };
  },
  props: {},
  methods: {
    async register() {
      const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      let message = '';
      if (!emailReg.test(this.model.email)) {
        message += '邮箱不合法';
      }
      if (this.model.password !== this.model.re_password) {
        message += '密码不一致';
      }
      console.log(message);
      if (message) {
        this.$message({
          type: 'success',
          message
        });
      }
      if (
        emailReg.test(this.model.email) &&
        this.model.password == this.model.re_password
      ) {
        // const res = await this.$http.post('rest/user_boss', this.model);
        const res = await this.$http.post('register', this.model);
        if (res.data) {
          this.$message({
            type: 'success',
            message: '注册成功'
          });
          this.$router.push('/login');
        }
      }
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.register-bg {
  background: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  #register {
    // background: linear-gradient(to bottom, #a46e92 0%,#27455d 100%)
    margin-top: 5rem;
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
      padding-top: 30px;
      margin: 0 15px;
      .info-register {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        input {
          margin: 18px 0;
          width: 100%;
          height: 42px;
        }
        .btn-submit {
          background: #5dd5c8;
          border: 0;
        }
        // input:nth-child(5) {
        //   background: #5dd5c8;
        //   color: #fff;
        //   border: 0;
        // }
      }
    }

    .register-footer {
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
}
</style>
