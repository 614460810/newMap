import Vue from 'vue';
import VueRouter from 'vue-router';
// import { component } from 'vue/types/umd';
import DataVisual from './../page/DataVisual';
import OneMap from './../page/OneMap'
import MoreScreen from './../components/MoreScreen'
Vue.use(VueRouter);
export default new VueRouter({
   routes:[
    {
        path:'/',
        component:DataVisual
    },
    {
        path:'/onemap',
        component:OneMap
    },
    {
        path:'/onemap/morescreen',
        component:MoreScreen
    },
   ],
   mode:'history'
})