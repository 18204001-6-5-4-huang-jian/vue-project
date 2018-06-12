<template>
 <div>
   <el-row>
    <el-button type="success" @click="increment">+</el-button>
    <el-button type="success" @click="decrement">-</el-button>
   </el-row>
   <el-row>
   <el-button type="success" :class="{show1:show==0,show2:show==1}">{{count}}</el-button>
   </el-row>
   <el-row v-if="show == 0">
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
  </el-row>
  <el-row>
    <el-button type="success" @click="changeShow">切换</el-button>
  </el-row>
    <div id="chart"></div>
    <child :message="jhuang" @listenTochild="listenTochildHandle"></child>
    <chart :id='id' :option='option'></chart>
 </div>
</template>
<script>
import HighCharts from "highcharts";
import child from "../container/Child";
import chart from "../container/Chart";
export default {
  name: "Home",
  components: {
    child,
    chart
  },
  data() {
    return {
      jhuang: "home",
      show: 0,
      data: [
        { name: "主要按钮", type: "primary" },
        { name: "成功按钮", type: "success" },
        { name: "信息按钮", type: "info" },
        { name: "警告按钮", type: "warning" },
        { name: "危险按钮", type: "danger" }
      ],
      id: "test",
      option: {
        title: {
          text: "highcharts-demo"
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
    // console.log(this.$route.params.id);
    HighCharts.chart("chart", {
      title: {
        text: "highcharts-demo"
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
    });
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
</style>
