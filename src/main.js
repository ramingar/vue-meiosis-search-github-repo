import Vue from 'vue'
import App from './App.vue'
import {states} from "./meiosis";

Vue.config.productionTip = false;

const vueApp = new Vue({
    el    : "#app",
    render: h => h(App)
});

// eslint-disable-next-line
states.map(state => {
    vueApp.$forceUpdate()
});
