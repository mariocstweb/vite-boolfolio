import {createRouter, createWebHistory} from 'vue-router';
 import HomePage from '../pages/HomePage.vue';
 import ShowPage from '../pages/ShowPage.vue';
 import NotFoundPage from '../pages/NotFoundPage.vue';


//  Definisco le rotte
 export default createRouter({
  history: createWebHistory(),
  routes:[
    {path: '/', component: HomePage},
    {path: '/projects/:id', component: ShowPage, name: 'ShowPage'},
    {path: '/:pathMatch(.*)*', component: NotFoundPage},

  ]
 });
