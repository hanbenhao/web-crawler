<template>
  <div
    class="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
  >
    <div class="login-container absolute z-10">
      <h2>用户登录</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">账号</label>
          <el-input
            type="text"
            id="username"
            v-model="username"
            placeholder="请输入账号"
          />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <el-input
            type="password"
            id="password"
            v-model="password"
            placeholder="请输入密码"
          />
        </div>
        <button type="submit" class="login-button" onclick="handleLogin">
          登录
        </button>
        <div class="register-link">
          <p>还没有账号？<router-link to="/register">去注册</router-link></p>
        </div>
      </form>
    </div>
    <div class="relative h-[100vh] w-full">
      <SnowfallBg
        color="ADD8E6"
        class="absolute inset-0"
        :min-radius="0.2"
        :max-radius="5"
        :speed="0.5"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SnowfallBg from '@/componets/SnowfallBg.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

let username = ref('')
let password = ref('')

const handleLogin = () => {
  console.log('登录信息:', username.value, password.value)
  router.replace({ path: '/home' })
}
</script>

<style lang="less" scoped>
.login-container {
  width: 400px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

input:focus {
  outline: none;
  border-color: #4c84ff;
  box-shadow: 0 0 0 2px rgba(76, 132, 255, 0.2);
}

.login-button {
  margin-top: 10px;
  padding: 12px;
  background-color: #4c84ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #3a70e0;
}

.register-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.register-link a {
  color: #4c84ff;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
