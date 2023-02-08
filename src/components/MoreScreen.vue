<template>
     <div class="morescreen-view">
        <div class="morescreen-top-view">
            <div id="top-left" class="map-item"></div>
            <div id="top-right" class="map-item"></div>
        </div>
        <div class="morescreen-bottom-view">
            <div id="buttom-left" class="map-item"></div>
            <div id="buttom-right" class="map-item"></div>
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
    name: 'MoreScreen',
    components: {

    },
    mounted: function () {
        this.initeMoreScreen;
    },
    methods: {
        async initeMoreScreen() {
            const [Map, MapView, Basemap, TileLayer, watchUtils] = await loadModules(
                ['esri/Map', 'esri/views/MapView', 'esri/Basemap', 'esri/layers/TileLayer', 'esri/core/watchUtils'],
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
                title:'basemap'
            });
            const map01=new Map({
                basemap,
            });
            const mapview01=new MapView({
                container:'top-left',
                zoom:8,
                map:map01,
                center:[119.553414,26.215803]
            });
            const map02=new Map({
                basemap,
            });
            const mapview02=new MapView({
                container:'top-right',
                zoom:8,
                map:map02,
                center:[119.553414,26.215803]
            });
            const map03=new Map({
                basemap,
            });
            const mapview03=new MapView({
                container:'buttom-left',
                zoom:8,
                map:map03,
                center:[119.553414,26.215803]
            });
            const map04=new Map({
                basemap,
            });
            const mapview04=new MapView({
                container:'buttom-right',
                zoom:8,
                map:map04,
                center:[119.553414,26.215803]
            });
            mapview01.ui.components=[];
            mapview02.ui.components=[];
            mapview03.ui.components=[];
            mapview04.ui.components=[];
            watchUtils.whenTrue(mapview01, 'stationary', function () {
                // Get the new center of the view only when view is stationary.
                if (mapview01.center) {
                    mapview02.goTo({
                        center: [mapview01.center.longitude, mapview01.center.latitude],
                        zoom: mapview01.zoom,
                    });
                    mapview03.goTo({
                        center: [mapview01.center.longitude, mapview01.center.latitude],
                        zoom: mapview01.zoom,
                    });
                    mapview04.goTo({
                        center: [mapview01.center.longitude, mapview01.center.latitude],
                        zoom: mapview01.zoom,
                    });
                }
            })
        }
    }

};
</script>

<style>
.morescreen-view {
    width: 100%;
    height: 100%;
}
.map-item {
    width: calc(50% - 2.5px);
    height: 100%;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
}
.morescreen-top-view {
    width: 100%;
    height: calc(50% - 2.5px);
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5px;
}
.morescreen-bottom-view {
    width: 100%;
    height: calc(50% - 2.5px);
    display: flex;
    justify-content: space-between;
    margin-top: 2.5px;
}
#top-left {
    margin-right: 2.5px;
}
#top-right {
    margin-left: 2.5px;
}
#buttom-left {
    margin-right: 2.5px;
}
#buttom-right {
    margin-left: 2.5px;
}


</style>