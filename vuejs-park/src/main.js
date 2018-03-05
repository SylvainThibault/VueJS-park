import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import MachinesList from "./MachinesList.vue";
import MachinesMap from "./MachinesMap.vue";
import MachineView from "./Machine.vue";

const routes = [
    {path: '/list' , component: MachinesList},
    {path: '/map' , component: MachinesMap},
    {path: '/machine' , component: MachineView}
];

const router = new VueRouter({
    routes // raccourci pour `routes: routes`
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
