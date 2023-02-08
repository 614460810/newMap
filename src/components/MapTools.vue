<template>
    <div class="maptools-view">
        <span class="maptools-item" @click="handleFunction" id="tree">目录树管理</span>
        <el-dropdown class="maptools-item" @command="handleCommand">
            <span class="el-dropdown-link">
                地图测量<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="distance">距离测量</el-dropdown-item>
                <el-dropdown-item command="area">面积测量</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="maptools-item" @command="handleCommand">
            <span class="el-dropdown-link">
                更多功能<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="morescreen">多屏对比</el-dropdown-item>
                <el-dropdown-item command="print">地图打印</el-dropdown-item>
                
            </el-dropdown-menu>
        </el-dropdown>
        <span class="maptools-item" @click="handleFunction" id="clear">清屏</span>

    </div>
</template>

<script>
import { loadModules } from 'esri-loader';
const options = {
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
};


export default {
    name: 'MapTools',
    components: {

    },
    methods: {
        handleFunction(e) {

            switch (e.target.id) {
                case "area":
                    break;
                case "tree":
                    this.open();
                    break;
                case "clear":
                    this.clear();
                    break;
                default:
                    break;
            }
        },
        handleCommand(command) {
            switch (command) {
                case 'distance':
                    this.initDistanceMeasure();
                    break;
                case 'area':
                    this.initAreaMap();
                    break;
                case 'print':
                    this.initPrint();
                    break;
                case 'morescreen':
                    this.$router.push('./onemap/morescreen')
                    break;
                default:
                    break;

            }
        },
        //距离测量
        async initDistanceMeasure() {
            const view = this.$store.getters.getMapView;
            const [DistanceMeasurement2D] = await loadModules(['esri/widgets/DistanceMeasurement2D'], options);
            if (this.measurementWidget) this.measurementWidget.destroy();
            this.measurementWidget = new DistanceMeasurement2D({
                 view,
            });
            view.ui.add(this.measurementWidget, 'top-left');
        },
        // 面积测量
        async initAreaMap() {
            // const _self = this;
            const view = this.$store.getters.getMapView;
            const [AreaMeasurement2D] = await loadModules(['esri/widgets/AreaMeasurement2D'], options);
            if (this.measurementWidget) this.measurementWidget.destroy();
            this.measurementWidget = new AreaMeasurement2D({
                view,
            });
            view.ui.add(this.measurementWidget, 'top-left');
        },
        // 地图打印
        async initPrint(){

        },
        clear(){
            const view=this.$store.getters.getMapView;
            const resultLayer=view.map.findLayerById('layerid')
            if(resultLayer){
                view.map.remove(resultLayer)
            }
        },

        open() {
            let vis = this.$store.getters.getMapTreeVis;
            this.$store.commit('setMapTreeVis', !vis)
        }
    }
};
</script>

<style>
.maptools-view {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 40px;
    background-color: white;
    padding: 0 15px;
}

.maptools-item {
    margin-right: 15px;
    font-size: 20px;
    line-height: 40px;
    cursor: pointer;
    color: black;
}

.maptools:last-child {
    margin-right: 0;
}
</style>