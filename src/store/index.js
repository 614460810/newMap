import Vue from 'vue';
import Vuex from 'vuex';
 
Vue.use(Vuex);
 
const state={
    MapView:'',
    MapTreeVis:false,
}
const getter={
    getMapView(){
        return state.MapView;
    },
    getMapTreeVis(){
        return state.MapTreeVis;
    }
}
const mutations ={
    setMapView(state,value){
        state.getMapView=value
    },
    setMapTreeVis(state,value){
        state.getMapTreeVis=value
    }
}
const store=new Vuex.Store({
    state,
    getter,
    mutations
})
 
export default store;