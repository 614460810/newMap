import Vue from 'vue';
import Vuex from 'vuex';
 
Vue.use(Vuex);
 
const state={
    MapView:'',
    MapTreeVis:false,
}
const getters={
    getMapView(state){
        return state.MapView;
    },
    getMapTreeVis(state){
        return state.MapTreeVis;
    }
}
const mutations ={
    setMapView(state,value){
        state.MapView=value
    },
    setMapTreeVis(state,value){
        state.MapTreeVis=value
    }
}
const store=new Vuex.Store({
    state,
    getters,
    mutations
})
 
export default store;