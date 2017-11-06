<template>
  <div class="header">
    <div class="nav">
      <div class="logo"><img src="../../assets/images/logo.png" alt=""></div>
      <div class="index">首页</div>
      <div class="cooperate">商务合作</div>
      <div class="store">店铺社区</div>
    </div>
    <div class="login">
      <div class="login_in">登录</div>
      <router-link to="register" class="reginster">免费注册</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style scoped>
  .logo{
    width:150px;
  }
  .header{
    display: flex;
    justify-content: space-between;
    margin:15px 50px;
  }
  .nav{
    width:600px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }
  .login{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right:20px;
  }
  .login_in{
    padding:5px 20px;
    background: #f39231;
    color: #fff;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
  }
  .reginster{
    padding:5px 20px;
    color: #333;
    border:1px solid #f39231;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    margin-left:30px;
  }
</style>
