<template>
  <div class="workTwo">
    <button type="button" v-on:click="getApartment">点击查看房源信息</button>
    <div v-if="apartment.name">
      <p>房源名称: {{apartment.name}}</p>
      <ul>
        <li  v-for="item in apartment.latestId">
          <span>id号码：{{item}}</span>
          <button type="button" v-on:click="() => getStay(item)">点击查看该住户详情</button>
        </li>
      </ul>
    </div>
    <div v-if="user.name">
      <p>住户详情</p>
      <p>id号码：{{user.id}}</p>
      <p>姓名: {{user.name}}</p>
      <p>图片链接: {{user.imgUrl}}</p>
      <p>入住时间: {{getTime(user.checkTime)}}</p>
      <p>评价: {{user.evaluation}}</p>
    </div>
  </div>
</template>
<script>
  import moment from 'moment';

  import WorkTwo from './workTwo';
  import { request } from '../utils/helper';


  export default {
    components:{ WorkTwo },
    data: () => {
      return { apartment: {}, user: {} };
    },
    methods: {
      getTime: function (timeStamp) {
        return moment(timeStamp).format('YYYY-MM-DD');
      },
      getApartment: function() {
        let that = this;
        request('/getApartment', { id: 1 }).then(data => {
          if (data.name) {
            that.apartment = data;
          }
        });
      },
      getStay: function(id) {
        let that = this;
        request('/getStay', { id }, 'post').then(data => {
          if (data.name) {
            that.user = data;
          }
        });
      },
    },
  }
</script>
<style scoped lang="less">
  .workTwo {
    margin-top: 50px;
    > button, div {
      margin-top: 20px;
    }
  }
</style>