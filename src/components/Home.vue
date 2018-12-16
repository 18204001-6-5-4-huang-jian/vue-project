<template>
 <div>
   <bread></bread>
   <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
</el-row>
   <el-row>
    <el-button type="success" @click="increment">+</el-button>
    <el-button type="success" @click="decrement">-</el-button>
   </el-row>
   <el-row>
   <el-button type="success" :class="{show1:show==0,show2:show==1}">{{count}}</el-button>
   </el-row>
   <el-row v-if="show == 0">
      <el-button type="primary" >主要按钮</el-button>
      <el-button type="success" >成功按钮</el-button>
      <el-button type="info" >信息按钮</el-button>
      <el-button type="warning" >警告按钮</el-button>
      <el-button type="danger" >危险按钮</el-button>
  </el-row>
  <el-row>
    <el-button type="success" @click="changeShow">切换</el-button>
  </el-row>
    <child :message="jhuang" @listenTochild="listenTochildHandle"></child>
    <chart :id='id' :option='option' :id1="id1" :option1="option1"></chart>
 </div>
</template>
<script>
import HighCharts from "highcharts";
import child from "../container/Child";
import chart from "../container/Chart";
import bread from '../common/breadcrumb.vue'
export default {
  name: "Home",
  components: {
    child,
    chart,
    bread
  },
  data() {
    return {
      jhuang: "demo",
      show: 0,
      data: [
        { name: "主要按钮", type: "primary" },
        { name: "成功按钮", type: "success" },
        { name: "信息按钮", type: "info" },
        { name: "警告按钮", type: "warning" },
        { name: "危险按钮", type: "danger" }
      ],
      id: "test",
      id1: "test1",
      option: {
        title: {
          text: "chart-highcharts-demo"
        },
        credits: {
          enabled: false
        },
        yAxis: {
          title: {
            text: "就业人数"
          }
        },
        legend: {
          align: "center",
          verticalAlign: "bottom"
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },
        series: [
          {
            name: "实施人员",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            name: "工人",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          },
          {
            name: "销售",
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
          },
          {
            name: "项目开发",
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
          },
          {
            name: "其他",
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
          }
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }
          ]
        }
      },
      option1: {
        title: {
          text: "chart-demo"
        },
        credits: {
          enabled: false
        },
        yAxis: {
          title: {
            text: "就业人数"
          }
        },
        legend: {
          align: "center",
          verticalAlign: "bottom"
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },
        series: [
          {
            name: "实施人员",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            name: "工人",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          },
          {
            name: "销售",
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
          },
          {
            name: "项目开发",
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
          },
          {
            name: "其他",
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
          }
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  watch: {
    show(newval, oldval) {
      console.log(newval);
      console.log(oldval);
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    changeShow() {
      if (this.show == 0) {
        this.show = 1;
      } else {
        this.show = 0;
      }
    },
    listenTochildHandle(data) {
      console.log(data);
    }
  }
};
</script>
<style scoped>
.count {
  margin: 10px;
}
.el-button {
  margin-top: 20px;
}
.show1 {
  color: deeppink;
}
.show2 {
  color: #ffffff;
}
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
    font-weight: bold;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
