<template>
<el-row>
  <el-col :span="12">
    <div :id="id" :option="option"></div>
  </el-col>
  <el-col :span="12">
    <div :id="id1" :option="option1"></div>
  </el-col>
</el-row>
</template>
<script>
export default {
  name: "Chart",
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
    id1: {
      type: String,
      default: ""
    },
    option: {
      type: Object,
      default: {}
    },
     option1: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    // console.log(this.id,this.id1);
    // console.log(this.option,this.option1)
    this.$HighCharts.chart(this.id, this.option);
    this.$HighCharts.chart(this.id1, this.option1);
  },
  updated(){
    this.$HighCharts.chart(this.id, this.option);
    this.$HighCharts.chart(this.id1, this.option1);
  },
  methods: {

  }
};
</script>
<style scoped>
</style>

