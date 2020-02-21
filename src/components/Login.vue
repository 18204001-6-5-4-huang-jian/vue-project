<template>
 <div class="login-container">
 <div class="login-box">
   <p class="login-title" v-text="'Welcome'"></p>
   <el-input v-model="email" style="width:200px;" ref="input" placeholder=""  @keyup.enter.native="goHome" @input="changeHandle()"></el-input>
   <el-button type="primary" class="login-btn" @click="goHome">{{login}}</el-button>
 </div>
 </div>
</template>
<script>
import { userLogin } from "../request/api.js";
import md5 from "md5";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      login: "登录"
    };
  },
  mounted() {
    // console.log(process.env.NODE_ENV);
    // console.log(this.$refs.input.value);
    // console.log(process.env.NODE_ENV)
  },
  methods: {
    async goHome() {
      const result = await userLogin({
        email:this.email,
        password: md5(123456)
      });
      console.log(result);
      if (!result) {
        this.$message({
          showClose: false,
          center: true,
          message: "请求失败"
        });
      } else if (result.data.success) {
        this.$router.push({
          path: `/home/${555}`,
          query: {
             email:this.email
          }
        });
      } else if (!result.data.success) {
        this.$message({
          showClose: false,
          center: true,
          message: `对不起,${result.data.message}`
        });
      }
    },
    changeHandle() {
      console.log(this.email);
    }
  }
};
</script>
<style scoped>
.login-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url("../images/login-bg.jpg") no-repeat;
  background-size:cover;
}
.login-box {
  width: 400px;
  height: 400px;
  border: 1px solid #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 5px;
  animation: changePosition 1.8s 1;
	-webkit-animation:changePosition 1.8s 1; /*Safari and Chrome*/
}
@keyframes changePosition{
  from{
     top: 40%;
  }
  to{
    top: 50%;
  }
}
@-webkit-keyframes changePosition{
  from{
     top: 40%;
  }
  to{
    top: 50%;
  }
}
.login-title {
  color: #ffffff;
  font-size: 24px;
  margin-top: 20px;
  font-family: "微软雅黑";
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.login-btn {
  margin-top: 240px;
  outline: none;
  border: 1px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
}
</style>
