<template>
    <div class="child">
        <p>{{message | capitalize}}</p>
        <el-button type="primary" round @click="sendParent">sendPraent</el-button>
    </div>
</template>
<script>
export default {
  name: "Child",
  data() {
    return {
       data:'Huang Jian'
    }
  },
  props: {
    message: {
      type: String,
      default: ""
    }
  },
  filters: {
    //过滤器
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  methods: {
    sendParent() {
      this.$emit("listenTochild", this.data);
    }
  }
};
</script>
<style scoped>
.child {
  width: 400px;
  height: 30px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
}
</style>

