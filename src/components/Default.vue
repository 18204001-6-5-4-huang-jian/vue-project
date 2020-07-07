<template>
<el-container>
  <bread></bread>
  <el-header>Huang Jian</el-header>
  <el-main>
    <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
  </el-row>
   <el-tree
      :data="treeData"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[]"
      :default-checked-keys="checkedArray"
      :props="defaultProps">
    </el-tree>
  </el-main>
  <div>
    <div id='code'></div>
    <canvas id="canvas"></canvas>
  </div>
</el-container>
</template>
<script>
import QRCode from 'qrcode'
export default {
    name:'Default',
    data() {
      return{
         treeData: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        checkedArray:[5,6],
        codes:''
      }
    },
    components:{
       QRCode:QRCode
    },
    mounted() {
        this.useqrcode();
    },
    methods:{
      useqrcode(){
        var canvas = document.getElementById('canvas')
        QRCode.toCanvas(canvas, 'http://211.103.176.186:30002/page/#/', function (error) {
          if (error) console.error(error)
          console.log('success!');
        })
      }

    }
}
</script>
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child{
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    /* min-height: 36px; */
    height: 40px;
    line-height: 40px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header{
    line-height: 60px;
    font-family: "Helvetica Neue";
  }
</style>


