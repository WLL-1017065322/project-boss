<template>
  <div>
    <header>
      <div class="center">
        <div class="left" @click="isOn=true" :class="{on:isOn}">聊天</div>
        <div class="right" @click="isOn=false" :class="{on:!isOn}">互动</div>
      </div>
    </header>

    <section>
      <div class="chat" v-show="isOn">
        <div class="chat-top">
          <div class="left">联系人</div>
          <div class="right">极速处理</div>
        </div>

        <ul class="chat-content">
          <li v-for="item in messageList" :key="item.id">
            <div class="left">
              <img :src="item.chat_img" alt />
            </div>
            <div class="right">
              <h4>
                <span>{{item.chat_name}}</span>
                <span class="time">{{item.chat_time}}</span>
              </h4>
              <span class="company">{{item.chat_title[0]}}||{{item.chat_title[1]}}</span>
              <span class="message">{{item.chat_msg.chat_msg_detial[item.chat_msg.chat_msg_status]}}</span>
            </div>
          </li>

          <li>
            <div class="left">
              <img src="../assets/images/mayun.jpg" alt />
            </div>
            <div class="right">
              <h4>
                <span>李大</span>
                <span class="time">时间</span>
              </h4>
              <span class="company">美团|经理</span>
              <span class="message">抱歉</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="hudong" v-show="!isOn">
        <ul class="hudong-nav">
          <!-- <li>对我感兴趣</li>
          <li>看过我</li>
          <li>新职位</li>-->
          <li
            v-for="(item,index) in toggleHudong"
            :key="item.id"
            @click="huDongNavClick(item,index)"
            :class="{on:index===current}"
          >{{item.title}}</li>
        </ul>

        <div class="hudong-content">
          <ul>
            <li v-for="item in interactiveList[huDongIndex]" :key="item.id">
              <a href="#/detail/0" class>
                <img :src="item.comp_pic" alt />
                <div class="text">
                  <div class="title">
                    <h4>{{item.hot_pos_name}}</h4>
                    <span>{{item.end_time}}</span>
                  </div>
                  <div class="name">{{item.comp_name}}</div>
                  <div class="msg">
                    <span>{{item.seniority}}</span>
                    <span>{{item.education}}</span>
                    <span>{{item.job_money}}</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      isOn: true,
      isOnNav: true,
      current: 0,
      messageList: [],
      interactiveList: [],
      huDongIndex: 0,
      // 互动切换

      toggleHudong: [
        {
          title: '对我感兴趣',
          huDongNumber: 0,
          isOn: true
        },
        {
          title: '看过我',
          huDongNumber: 1,
          isOn: false
        },
        {
          title: '新职位',
          huDongNumber: 2,
          isOn: false
        }
      ]
    };
  },
  methods: {
    getMessageApi() {
      Axios.get('/api/data/message.json')
        .then(res => {
          // console.log(res.data.data.chat.chat_lists)
          if (res.data.code == '0') {
            this.messageList = res.data.data.chat.chat_lists;
            // console.log(this.messageList)
            this.interactiveList = res.data.data.interactive;
          }
          // console.log(this.messageList);
        })
        .catch(error => {
          // console.log(error)
        });
    },
    huDongNavClick(item, index) {
      this.huDongIndex = item.huDongNumber;
      this.current = index;
      // console.log(index)
    }
  },
  components: {},
  created() {
    this.getMessageApi();
  },
  mounted() {
    // console.log(isOn)
  }
};
</script>

<style scoped lang="scss">
div {
  header {
    width: 100%;
    height: 50px;
    background: #53cac3;
    position: fixed;
    .center {
      width: 33.333%;
      height: 70%;
      border-radius: 10%;
      display: flex;
      margin: 7.5px auto;
      div {
        border: 1px solid #fff;
        width: 50%;
        line-height: 35px;
        text-align: center;
        color: #fff;
      }
      div.on {
        color: #53cac3;
        background: #fff;
      }
    }
  }

  section {
    padding-top: 50px;
    padding-bottom: 10px;
    margin-bottom: 30px;
    // background: #fff;
    .chat {
      // display: none;
      background: #fff;
      .chat-top {
        width: 100%;
        height: 50px;
        padding: 10px 20px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        .left {
          background: #fff;
          color: #53cac3;
        }
        .right {
          margin: 5px 0;
          line-height: 20px;
          border: 1px solid #8d8d8d;
          color: #8d8d8d;
          border-radius: 8px;
          padding: 0 10px;
          font-size: 12px;
          letter-spacing: 2px;
        }
      }
      .chat-content {
        padding: 0 20px;
        list-style: none;

        li {
          margin: 10px 0px;
          display: flex;
          border-bottom: 1px solid #eee;
          .left {
            height: 57.5px;
            width: 57.5px;
            border-radius: 50%;
            overflow: hidden;
            margin: 10px 10px;
            img {
              width: 100%;
            }
          }
          .right {
            width: 100%;

            padding: 10px 20px;
            h4 {
              display: flex;
              justify-content: space-between;
              font-size: 16px;
              color: #333;
              .time {
                font-size: 12px;
                color: #999;
              }
            }
            .company {
              font-size: 12px;
              color: #999;
            }

            .message {
              display: block;
              font-size: 12px;
              color: #ccc;
            }
          }
        }
      }
    }

    .hudong {
      // display: none;
      .hudong-nav {
        background: #fff;
        padding: 0 20px;
        width: 100%;
        height: 40px;
        display: flex;
        list-style: none;
        // justify-content: space-around;
        // align-items: center;
        border-bottom: 1px solid #eee;
        color: #aaa;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
        li {
          height: 100%;
          width: 33%;
        }
        li.on {
          border-bottom: 1px solid #53cac3;
        }
      }

      .hudong-content {
        background: #fff;
        // padding: 15px 20px;
        padding: 0 20px;
        width: 100%;
        ul {
          list-style: none;
          li {
            border-bottom: 1px solid #eee;
            background: #fff;

            a {
              display: flex;

              img {
                width: 59px;
                height: 59px;
                margin: 16px 0 0 18px;
              }
              .text {
                width: 100%;
                padding: 18px 0;
                margin: 0 20px;
                .title {
                  color: #414a60;
                  display: flex;
                  justify-content: space-between;
                  h4 {
                    font-size: 15px;
                  }
                  span {
                    font-size: 12px;
                  }
                }
                .name {
                  font-size: 12px;
                  color: #414a60;
                }
                .msg {
                  font-size: 12px;
                  color: #8892ac;
                  span {
                    margin-right: 14px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
