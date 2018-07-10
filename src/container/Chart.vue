<template>
   <div :id="id" :option="option"></div>
</template>
<script>
import HighCharts from "highcharts";
export default {
  name: "chart",
  data() {
    return {
      data: "jhuang"
    };
  },
  props: {
    // 验证类型
    id: {
      type: String,
      default: ""
    },
    option: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    HighCharts.chart(this.id, this.option);
  },
  methods: {}
};
</script>
<style scoped>
</style>

