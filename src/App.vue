<template>
  <div id="app">
    <el-container class="app-out-pannel">
      <el-header class="sys-header">一张图项目系统</el-header>
      <el-container class="app-content-pannel">
        <el-aside width="200px" class="sys-menu">
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
            :collapse="isCollapse" 
            @select="handlePageSelect">
            <el-menu-item index="1" >
              <i class="el-icon-document"></i>
              <span slot="title">首页大屏</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-setting"></i>
              <span slot="title">地图</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="map-content">
         
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  },
  methods:{
    handlePageSelect(index){
      if(index==='1'){
        this.$router.push('./')}
      else if(index==='2'){
        this.$router.push('./onemap')
      }

    }
  }
};
</script>

<style>
html,
body,
#app {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
}

.app-out-pannel,
.app-content-pannel {
  height: 100%;
}

.sys-header {
  background-color: #409eff;
  line-height: 60px;
  color: #fff;
  font-size: 20px;
}

.sys-menu {
  background-color: #c0c4cc;
}

.map-content {
  padding: 5px !important;
}
</style>