<template>
  <div>
    <header>
      <div class="top">公司</div>
      <nav>
        <ul>
          <!-- <li>融资</li>
          <li>规模</li>
          <li>行业</li>-->
          <li v-for="(item,index) in navList" :key="index" @click="navClick(index)">{{item.title}}</li>
        </ul>
        <component :is="currentComponent"></component>
      </nav>
    </header>
    <section>
      <ul>
        <li class="clear" v-for="item in companyList" :key="item.id">
          <div class="left">
            <img :src="item.comp_pic" alt />
          </div>
          <div class="right">
            <h4>{{item.comp_name}}</h4>
            <span class="address">{{item.comp_address}}</span>
            <p>
              <span>{{item.comp_nature}}</span>
              <span>|</span>
              <span>{{item.comp_stock}}</span>
              <span>|</span>
              <span>{{item.comp_people}}</span>
            </p>
            <div class="rezhao">
              热招:
              <span style="color: rgb(118, 213, 207);">{{item.hot_pos_name}}</span>等
              <span>{{item.hot_pos_no}}</span>个职位
              <span class="icon-right pull-right"></span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Axios from 'axios'
import rongziCom from '../components/company/rongziCom.vue'
import guimoCom from '../components/company/guimoCom.vue'
import hangyeCom from '../components/company/hangyeCom.vue'

export default {
  data() {
    return {
      companyList: [],
      navList: [
        {
          title: '融资',
          id: 0,
          com: 'rongziCom'
        },
        {
          title: '规模',
          id: 1,
          com: 'guimoCom'
        },
        {
          title: '行业',
          id: 2,
          com: 'hangyeCom'
        }
      ],
      current: null,
      currentComponent: ''
    }
  },
  components: {
    rongziCom,
    guimoCom,
    hangyeCom
  },
  methods: {
    getCompanyListApi() {
      Axios.get('/api/data/comdetail.json')
        .then(res => {
          if (res.data.code == '200') {
            this.companyList = res.data.company
            // console.log(this.companyList)
          }
        })
        .catch(error => {
          // console.log(error)
        })
    },
    navClick(index) {
      if (index != this.current) {
        this.current = index
        this.currentComponent = this.navList[index].com
      } else {
        this.current = null
        this.currentComponent = ''
      }
    }
  },
  mounted() {
    this.getCompanyListApi()
  }
}
</script>

<style scoped lang="scss">
div {
  header {
    position: fixed;
    width: 100%;
    .top {
      width: 100%;
      height: 54.41px;
      background: #53cac3;
      line-height: 54.41px;
      color: #fff;
      text-align: center;
      font-size: 18px;
    }

    nav {
      width: 100%;
      height: 45.41px;
      background-color: #fff;
      ul {
        width: 100%;
        height: 45.41px;
        display: flex;
        list-style: none;
        justify-content: space-around;
        line-height: 45.41px;
        align-items: center;
        text-align: center;

        li {
          width: 33.33%;
          font-size: 12px;
          color: #8d8d8d;
          position: relative;
        }
        li:nth-child(1)::after,
        li:nth-child(2)::after {
          content: '';
          border: 0.5px solid #8d8d8d;
          height: 12px;
          position: absolute;
          top: 35%;
          left: 100%;
        }
      }
    }
  }
  section {
    padding-top: 100px;
    ul {
      padding: 20px 10px;
      margin-bottom: 30px;
      li {
        // padding: 20px 10px;
        background-color: #fff;
        display: flex;
        .left {
          margin: 30px;
          width: 50px;
          height: 50px;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .right {
          h4 {
            margin: 10px 0;
            letter-spacing: 1px;
          }

          .address {
            font-size: 12px;
            color: #8d8d8d;
            margin: 10px 0 20px 0;
          }

          p {
            display: flex;
            font-size: 12px;
            margin-bottom: 20px;
            span {
              margin-right: 5px;
              margin-top: 20px;
            }
          }

          .rezhao {
            font-size: 12px;
            height: 53.75px;
            padding: 18.38px 0;
            letter-spacing: 1px;
            border-top: 0.5px solid #e5e5e5;
          }
        }
      }
    }
  }
}
</style>
