import Vue from 'Vue';

import Header from './components/header';
import WorkTwo from './components/workTwo';

import './static/less/style';

new Vue({
  el: '#app',
  components: {
    'header-component': Header,
    'api-component': WorkTwo,
  }
});
