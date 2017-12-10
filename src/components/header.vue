<template>
  <div class="wrapper">
    <header>
      <div class="content">
        <h1>
          <a href="http://paires.me"></a>
        </h1>
        <ul>
          <li>
            <span  v-on:click="navShow">挑选公寓<i v-bind:class="{ rotate: show }" class="iconfont icon-fa-angle-down"></i></span>
          </li>
          <li><a class="nav-link" target="_blank" href="http://paires.me/co-host-list">联合房东</a></li>
          <li><a class="nav-link" target="_blank" href="http://paires.me/rent-your-property">超级房东</a></li>
          <li><a class="nav-link" target="_blank" href="http://paires.me/membership">Paires 会员</a></li>
        </ul>
        <div class="header-join">
          <a class="join-link" href="http://paires.me/become-membership">成为超级会员</a>
        </div>
      </div>
      <div v-bind:class="{ mask: !show }"></div>
      <Dropmenu :show="show"></Dropmenu>
    </header>
  </div>
</template>
<script>
  import Dropmenu from './dropmenu';

  export default {
    components:{ Dropmenu },
    data: () => {
      return { show: true };
    },
    methods: {
      navShow: function() {
        this.show = !this.show;
      }
    },
  }
</script>
<style scoped lang="less">
  .wrapper {
    min-width: 1220px;
  }

  header {
    position: relative;
    width: 100%;
  }

  .content {
    position: relative;
    width: 100%;
    height: 74px;
    line-height: 74px;
    z-index: 9999;
    background-color: #fff;
  }

  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 997;
  }

  header h1 {
    float: left;
    > a {
      display: inline-block;
      vertical-align: middle;
      margin-left: 50px;
      width: 140px;
      height: 38px;
      background: url(../static/img/logo_2d5e7e6.svg) no-repeat center center;
    }
  }

  .rotate {
    transform: rotate(180deg);
  }

  header ul {
    float: left;
    > li {
      &:first-child {
        cursor: pointer;
        margin-left: 58px;
        user-select: none;
        > span:hover {
          border-bottom: 2px solid #3d3f41;
        }
        i {
          display: inline-block;
          font-size: 12px;
          vertical-align: middle;
          margin-left: 2px;
          transition: all .5s;
        }
      }

      float: left;
      font-size: 16px;
      color: #3d3f41;
      > a {
        margin-left: 58px;
      }
    }
  }

  .header-join {
    float: right;
    margin-right: 50px;
    > a {
      display: inline-block;
      padding: 0;
      border-radius: 2px;
      text-align: center;
      font-weight: 500;
      width: 180px;
      height: 46px;
      line-height: 46px;
      font-size: 16px;
      background-color: #ffe529;
      color: #231f20;
      border: 0;
    }
  }
  .nav-link {
    &:link {
      color: #3d3f41;
    }
    &:visited {
      color: #3d3f41;
    }
    &:hover {
      color: #3d3f41;
      border-bottom: 2px solid #3d3f41;
    }
    &:active {
      color: #3d3f41;
      border-bottom: 2px solid #3d3f41;
    }
  }

  .join-link {
    &:link {
      color: #3d3f41;
    }
    &:visited {
      color: #3d3f41;
    }
    &:hover {
      color: #3d3f41;
      background-color: #ffe529 - #222222;
    }
    &:active {
      color: #3d3f41;
    }
  }
</style>