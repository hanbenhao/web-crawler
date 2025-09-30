<template>
  <div class="register-container">
    <h2>用户注册</h2>
    <form @submit.prevent="handleRegister" class="register-form">
      <div class="form-group">
        <label for="email">邮箱</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          placeholder="请输入邮箱"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          placeholder="请输入密码"
          required
        />
      </div>
      <div class="form-group">
        <label for="confirmPassword">确认密码</label>
        <input 
          type="password" 
          id="confirmPassword" 
          v-model="confirmPassword" 
          placeholder="请再次输入密码"
          required
        />
        <div class="error-message" v-if="passwordError">{{ passwordError }}</div>
      </div>
      <div class="form-group">
        <label for="inviteCode">邀请码</label>
        <input 
          type="text" 
          id="inviteCode" 
          v-model="inviteCode" 
          placeholder="请输入邀请码"
          required
        />
      </div>
      <button type="submit" class="register-button">注册</button>
      <div class="login-link">
        已有账号？<router-link to="/login">去登录</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      inviteCode: '',
      passwordError: ''
    }
  },
  methods: {
    handleRegister() {
      // 验证两次密码是否一致
      if (this.password !== this.confirmPassword) {
        this.passwordError = '两次输入的密码不一致'
        return
      }
      
      this.passwordError = ''
      
      // 这里可以添加注册逻辑
      console.log('注册信息:', {
        email: this.email,
        password: this.password,
        inviteCode: this.inviteCode
      })
      
      // 注册成功后可以跳转到登录页面
      // this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
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

.register-form {
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

.error-message {
  color: #ff4c4c;
  font-size: 14px;
  margin-top: 5px;
}

.register-button {
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

.register-button:hover {
  background-color: #3a70e0;
}

.login-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.login-link a {
  color: #4c84ff;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>