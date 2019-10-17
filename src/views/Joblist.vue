<template>
  <div>
    <header>
      <div class="top">
        <span class="tittle">web前端</span>
        <div class="icon">
          <span class="iconfont icon-increase"></span>
          <span class="iconfont icon-search"></span>
        </div>
      </div>
      <nav>
        <ul class="job-content">
          <li
            v-for="(item,index) in navList"
            :key="item.id"
            @click="navClick(index)"
            :class="{selected:current===index}"
          >{{item.title}}</li>
        </ul>
        <!-- <recommend-com v-show="current===navList[0].id&&ison"></recommend-com>
        <location-com v-show="current===navList[1].id&&ison"></location-com>
        <company-com v-show="current===navList[2].id&&ison"></company-com>
        <require-com v-show="current===navList[3].id&&ison"></require-com>-->

        <component v-bind:is="currentComponent"></component>
      </nav>
    </header>

    <section>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <li v-for="(item,index) in jobList" :key="index">
          <a href="#/detail/0" class>
            <img :src="item.src" alt />
            <div class="text">
              <div class="title">
                <h4>{{item.need_job}}</h4>
                <span>{{item.job_money}}</span>
              </div>
              <div class="name">{{item.company}}</div>
              <div class="msg">
                <span>{{item.con_place}}</span>
                <span>{{item.seniority}}</span>
                <span>{{item.education}}</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <!-- 加载种 -->
      <div class="job-load" v-show="loading">
        <mt-spinner type="double-bounce" color="#26a2ff"></mt-spinner>
        <span>官人慢点</span>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import recommendCom from '../components/job/recommend';
import companyCom from '../components/job/company';
import locationCom from '../components/job/location';
import requireCom from '../components/job/require';

export default {
  data() {
    return {
      current: null,
      jobList: [],
      tempList: [],
      currentComponent: '',
      loading: false,
      navList: [
        {
          title: '推荐',
          id: 0,
          com: 'recommendCom'
        },
        {
          title: '上海',
          id: 1,
          com: 'locationCom'
        },
        {
          title: '公司',
          id: 2,
          com: 'companyCom'
        },
        {
          title: '要求',
          id: 3,
          com: 'requireCom'
        }
      ]
      // items: [
      //   {
      //     id: "001",
      //     uesrname: "zhangsan",
      //     password: "123",
      //     phoneNumber: "1"
      //   },
      //   {
      //     id: "002",
      //     uesrname: "lisi",
      //     password: "123",
      //     phoneNumber: "2"
      //   },
      //   {
      //     id: "003",
      //     uesrname: "admin",
      //     password: "123",
      //     phoneNumber: "3"
      //   }
      // ]
    };
  },
  components: {
    recommendCom,
    companyCom,
    locationCom,
    requireCom
  },
  methods: {
    getJobListApi() {
      axios
        .get('/api/data/joblist.json')
        .then(res => {
          // console.log(res);
          if (res.data.code == '0') {
            // this.jobList == res.data.main
            // console.log(this.jobList)
            // console.log(this);
          }

          this.jobList = res.data.main;
          this.tempList = res.data.main;
          // console.log(this.jobList);
        })
        .catch(error => {
          // console.log(error);
        });
    },
    navClick(index) {
      if (index != this.current) {
        this.current = index;
        this.currentComponent = this.navList[index].com;
      } else {
        this.current = null;
        this.currentComponent = '';
      }
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.jobList = this.jobList.concat(this.tempList);
        this.loading = false;
      }, 2500);
    }
  },
  mounted() {
    this.getJobListApi();
  }
};
</script>

<style scoped lang="scss">
div {
  header {
    width: 100%;
    position: sticky;
    top: 0;

    .top {
      display: flex;
      justify-content: space-between;
      padding: 10px 10px;
      background-color: #53cac3;
      color: #fff;
      .icon {
        .iconfont {
          font-size: 23px;
        }

        span:nth-child(1) {
          border-right: 0.5px solid #fff;
        }
      }
      // span {
      //   color: #fff;
      //   padding: 0 10px;
      //   font-size: 16px;
      // }
    }
    nav {
      width: 100%;
      height: 41.39px;
      background: #fff;
      border-bottom: 1px solid #eee;
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        li {
          width: 25%;
          line-height: 41.39px;
          text-align: center;
          position: relative;
          color: #8d8d8d;
          font-size: 12px;
          // cursor: pointer;
        }
        li.selected {
          color: #53cac3;
        }
        li:nth-child(1)::after,
        li:nth-child(2)::after,
        li:nth-child(3)::after {
          content: '';
          border: 0.5px solid #8d8d8d;
          height: 20px;
          position: absolute;
          top: 25%;
          left: 100%;
        }
      }
      recommend-com {
      }
    }
  }

  section {
    margin-bottom: 30px;
    padding-bottom: 30px;
    ul {
      list-style: none;
      li {
        background: #fff;
        margin-bottom: 8px;

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
    .job-load {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      span {
        font-size: 12px;
        color: #26a2ff;
      }
    }
  }
}
</style>
