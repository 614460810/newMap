<template>
    <div class="maptools">
        <span class="map-item" @click="handleFunction" id="area">地图测量</span>
        <span class="map-item" @click="handleFunction" id="tree">目录树管理</span>
        <span class="map-item" @click="handleFunction" id="more">更多功能</span>
        <span class="map-item" @click="handleFunction" id="clear">清屏</span>

    </div>
</template>

<script>

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
                case "more":
                    break;
                case "clear":
                    break;
                default:
                    break;
            }
        },
        open(){
            let vis=this.$store.getters.getMapTreeVis;
            this.$store.commit('setMapTreeVis',!vis)
        }
    }
};
</script>

<style>
.maptools {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 40px;
    background-color: white;
    padding: 0 15px;
}

.maptools>span {
    margin-right: 15px;
    font-size: 20px;
    line-height: 40px;
    cursor: pointer;
}

.maptools>span:last-child {
    margin-right: 0;
}
</style>