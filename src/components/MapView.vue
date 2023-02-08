<template>
    <div id="mapview">
        <div class="view-change" @click='handleViewChange'>
            <span>{{ viewmodule }}</span>
        </div>
    </div>
</template>

<script>
import { loadModules } from 'esri-loader';
const options = {
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
};
export default {
    name: 'MapView',
    data() {
        return {
            viewmodule: '3D'
    }
},
components: { },
mounted: function() {
    this.initiate()
},
methods: {
        async initiate(){
        const [Map, MapView, Basemap, TileLayer,] = await loadModules(
            [
                'esri/Map',
                'esri/views/MapView',
                'esri/Basemap',
                'esri/layers/TileLayer',

            ],
            options,
        );
        const basemap = new Basemap({
            baseLayers: [
                new TileLayer({
                    url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
                    title: 'Basemap'
                })
            ],
            id: 'basemap',
            title: 'basemap'
        })
        const map = new Map({
            basemap,
        });
        const view = new MapView({
            map,
            container: 'mapview',
            zoom: 8,
            center: [104.072745, 30.663774],
        });
        view.ui.components = [];
        // console.log(view);
        this.$store.commit('setMapView', view)

    },
    async createSceneView() {
            const [Map, SceneView, Basemap, TileLayer] = await loadModules(
                ['esri/Map', 'esri/views/SceneView', 'esri/Basemap', 'esri/layers/TileLayer'],
                options,
            );
            let basemap = new Basemap({
                baseLayers: [
                    new TileLayer({
                        url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
                        title: 'Basemap',
                    }),
                ],
                title: 'basemap',
                id: 'basemap',
            });
            const map = new Map({
                basemap,
            });
            const sceneView = new SceneView({
                container: 'mapview',
                map: map,
            });
            setTimeout(() => {
                sceneView.goTo({
                    zoom: 10,
                    center: [104.072745, 30.663774],
                });
            }, 3000);
            sceneView.ui.components = [];
            this.$store.commit('_setDefaultMapView', sceneView);
        },
        handleViewChange(){
            if(this.viewmodule==='3D'){
                this.createSceneView();
                this.viewmodule='2D'
            }else if(this.viewmodule==='2D'){
                this.initiate();
                this.viewmodule='3D'
            }
        }
        

}
};
</script>

<style>
#mapview {
    position: relative;
    height: 100%;
    width: 100%;
}
.view-change{
    position: absolute;
    width: 32px;
    height: 32px;
    right: 15px;
    bottom: 180px;
    background-color: #fff;
    cursor: pointer;
    line-height: 32px;

}
</style>