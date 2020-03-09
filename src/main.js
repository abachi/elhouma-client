import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
   iconUrl: require('leaflet/dist/images/marker-icon.png'),
   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

require('@/store/subscriber');

axios.defaults.baseURL = 'http://localhost:8000/api';

Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then((res) => {
    console.log(res);
    new Vue({
    router,
    store,
    render: h => h(App)
    }).$mount('#app')
});
