<template>
    <div class="maptree" v-show="this.$store.getters.getMapTreeVis">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
import { loadModules } from 'esri-loader';
const options = {
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
};
export default {
    name: 'MapTree',
    components: {

    },
    data() {
        return {
            data: [{
                label: '地图数据',
                

                children: [{
                    label: '暖色系',
                    layerid: 'layerid',
                    layerurl: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer',
                },
                {
                    label: '冷色系',
                    layerid: 'layerid',
                    layerurl: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer',

                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },
    methods: {
        async handleNodeClick(data) {
            if(data.layerurl){
                const [TileLayer] = await loadModules(
                ['esri/layers/TileLayer'],
                options,
            );
            // const self =this;
            const view = this.$store.getters.getMapView;
            // 若存在图层 则删除
            const resultLayer = view.map.findLayerById('layerid')
            if (resultLayer) {
                view.map.remove(resultLayer)
            }
            const layer = new TileLayer({
                url: data.layerurl,
                id: data.layerid
            });
            view.map.add(layer);
            }
           
        }
    }
};
</script>
<style>
.maptree {

    position: absolute;
    top: 20px;
    left: 10px;
    height: 200px;
    width: 200px;
    background-color: #fff;

}
</style>