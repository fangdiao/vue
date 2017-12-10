<template>
  <div id="menu" class="drop-menu" v-bind:class="{ show }">
    <div class="address">
      <div class="city-bar" v-for="item in ADDRESS">
        <a target="_blank" v-bind:href="item.cityLink">{{ item.cityName }}</a>
        <ul>
          <li v-for="i in item.district">
            <a target="_blank"  v-bind:href="i.districtLink">{{ i.districtName }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="brand">
      <h2>品牌公寓</h2>
      <ul>
        <li v-for="item in BRAND">
          <a
            v-bind:style="{ backgroundImage: `url(${item.imgUrl})` }"
            v-bind:href="item.brandLink">
          </a>
          <p>{{ item.brandName }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Dropmenu from './dropmenu';

  const ADDRESS = [
    {
      cityName: '北京',
      cityLink: '#',
      district: [
        { districtName: '朝阳区', districtLink: '#', },
        { districtName: '东城区', districtLink: '#', },
        { districtName: '海淀区', districtLink: '#', },
      ],
    },
    {
      cityName: '成都',
      cityLink: '#',
      district: [
        { districtName: '锦江区', districtLink: '#', },
        { districtName: '青羊区', districtLink: '#', },
        { districtName: '金牛区', districtLink: '#', },
        { districtName: '武侯区', districtLink: '#', },
        { districtName: '高新区', districtLink: '#', },
        { districtName: '双流区', districtLink: '#', },
      ],
    },
    {
      cityName: '上海',
      cityLink: '#',
      district: [
        { districtName: '徐汇区', districtLink: '#', },
        { districtName: '静安区', districtLink: '#', },
        { districtName: '黄浦区', districtLink: '#', },
        { districtName: '长宁区', districtLink: '#', },
        { districtName: '虹口区', districtLink: '#', },
        { districtName: '浦东新区', districtLink: '#', },
      ],
    },
    {
      cityName: '广州',
      cityLink: '#',
      district: [
        { districtName: '海珠区', districtLink: '#', },
        { districtName: '番禺区', districtLink: '#', },
        { districtName: '天河区', districtLink: '#', },
      ],
    },
    {
      cityName: '深圳',
      cityLink: '#',
      district: [
        { districtName: '龙华新区', districtLink: '#', },
        { districtName: '福田区', districtLink: '#', },
        { districtName: '龙岗区', districtLink: '#', },
        { districtName: '罗湖区', districtLink: '#', },
      ],
    },
    {
      cityName: '南京',
      cityLink: '#',
      district: [
        { districtName: '秦淮区', districtLink: '#', },
      ],
    },
    {
      cityName: '海南',
      cityLink: '#',
      district: [
        { districtName: '万宁市', districtLink: '#', },
      ],
    },
    {
      cityName: '重庆',
      cityLink: '#',
      district: [
        { districtName: '渝北区', districtLink: '#', },
        { districtName: '渝中区', districtLink: '#', },
      ],
    },
  ];

  const BRAND = [
    { brandName: '友舍', imgUrl: require('../static/img/youshe@2x_e88f31c.png'), brandLink: '#' },
    { brandName: '共享际', imgUrl: require('../static/img/5lmeet@2x_e871683.png'), brandLink: '#' },
    { brandName: '青舍', imgUrl: require('../static/img/qingshe@2x_a33a097.png'), brandLink: '#' },
    { brandName: 'LOFT42', imgUrl: require('../static/img/loft42@2x_bb7dbad.png'), brandLink: '#' },
    { brandName: '猫系屋企', imgUrl: require('../static/img/maoxi@2x_5cc2a12.png'), brandLink: '#' },
    { brandName: 'iHome', imgUrl: require('../static/img/ihome@2x_23eb980.png'), brandLink: '#' },
  ];

  export default {
    components:{ Dropmenu },
    props: ['show'],
    data: () => {
      return { ADDRESS, BRAND };
    },
  }
</script>
<style scoped lang="less">
  .drop-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 998;
    background-color: #231f20;
    padding: 50px 60px 40px;
    color: #bbb;
    line-height: 1.5;
    transition: top .5s;
    box-sizing: border-box;
  }

  .show {
    top: -400px !important;
  }

  .address {
    float: left;
  }

  .city-bar {
    float: left;
    margin-right: 50px;
    > a {
      display: block;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.25;
      color: #fff;
      margin-bottom: 12px;
    }
    > ul {
      > li {
        a > {
          font-size: 14px;
          color: #8b8b8b;
          line-height: 30px;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  .brand {
    float: right;
    > h2 {
      font-size: 16px;
      font-weight: 500;
      height: 20px;
      line-height: 20px;
      color: #fff;
      margin-bottom: 30px;
    }
    > ul {
      > li {
        float: left;
        margin-right: 20px;
        margin-bottom: 12px;
        > a {
          display: block;
          width: 60px;
          height: 60px;
          background-size: 60px;
          margin-bottom: 5px;
        }
        > p {
          text-align: center;
        }
      }
    }
  }
</style>