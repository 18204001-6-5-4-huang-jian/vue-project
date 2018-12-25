<template>
    <el-breadcrumb separator=">">
    <el-breadcrumb-item :to="{path:''}">{{this.$route.meta.title}}</el-breadcrumb-item>
     <el-breadcrumb-item v-for="(item,index) in $route.meta.breadcrumb" :key="index">{{item.name}}</el-breadcrumb-item>
</el-breadcrumb>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted() {
       
    },
}
</script>
<style scoped>
    .el-breadcrumb{
        height: 30px;
        line-height: 30px;
        background: #fff;
        padding: 5px 20px;
    }
</style>


