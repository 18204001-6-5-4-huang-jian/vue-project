<template>
 <div class="login-container">
 <div class="login-box">
   <p class="login-title" v-text="'Welcome'"></p>
   <input type="text" ref="input" v-model="email" @keyup.enter="goHome" @change="changeHandle($event)"/>
   <button class="login-btn" @click="goHome">{{login}}</button>
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
  },
  methods: {
    async goHome() {
      const result = await userLogin({
        email: "jhuang@abcft.com",
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
        this.$router.push(`/home/${555}`);
        // this.$router.push({
        //   path: `/home/${555}`,·
        //   query: {
        //     keyword:this.email
        //   }
        // });
      } else if (!result.data.success) {
        this.$message({
          showClose: false,
          center: true,
          message: `对不起,${result.data.message}`
        });
      }
    },
    changeHandle(e) {
      // console.log(e.target.value);
      this.email = e.target.value;
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
  /* background-size:cover; */
  background-size: 100%;
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
}
.login-title {
  color: #ffffff;
  font-size: 20px;
  margin-top: 20px;
  font-family: "微软雅黑";
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.login-btn {
  margin-top: 300px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  outline: none;
  border: 1px solid #ffffff;
  background: #000000;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
}
</style>
