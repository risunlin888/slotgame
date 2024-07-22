<template>
  <el-form @submit.prevent="onSubmit">
    <el-form-item label="Username">
      <el-input v-model="username"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input type="password" v-model="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const onSubmit = () => {
  const formData = { username: username.value, password: password.value }
  emit('submit', formData)
}
</script>

<style scoped>
</style>
