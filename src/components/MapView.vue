<template>
    <div id="mapview">
       
    </div>
</template>

<script>
import {loadModules} from 'esri-loader';
const options = {
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
};
export default {
    name: 'MapView',
    components: {},
    mounted:function(){
        this.initiate()
    },
    methods:{
        async initiate(){
            const [Map, MapView, Basemap, TileLayer, ] = await loadModules(
                [
                    'esri/Map',
                    'esri/views/MapView',
                    'esri/Basemap',
                    'esri/layers/TileLayer',
                   
                ],
                options,
            );
            const basemap=new Basemap({
                baseLayers:[
                    new TileLayer({
                        url:'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
                        title:'Basemap'
                    })
                ],
                id:'basemap',
                title:'basemap'
            })
            const map=new Map({
                basemap,
            });
            const view=new MapView({
                map,
                container:'mapview',
                zoom:8,
                center: [104.072745, 30.663774],
            });
            view.ui.components=[];
            // console.log(view);
            this.$store.commit('setMapView',view)
        }

    }
};
</script>

<style>
#mapview{
    position: relative;
    height: 100%;
    width: 100%;
}

</style>