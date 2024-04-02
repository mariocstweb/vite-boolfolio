import {createRouter, createWebHistory} from 'vue-router';
 import HomePage from '../pages/HomePage.vue';


//  Definisco le rotte
 export default createRouter({
  history: createWebHistory(),
  routes:[
    {path: '/', component: HomePage}
  ]
 });
