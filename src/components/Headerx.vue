<template>
  <header class="header">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="80" height="80" />
    <div class="wrapper">
      <button @click="goToHome">Home</button>
      <button @click="goToAbout">About</button>
      <el-button type="primary" :icon="Operation" @click="toggleSidebar">左侧栏导航</el-button>
<el-button @click="showLoginDialog()">888</el-button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {defineEmits} from 'vue'
const emit = defineEmits(['toggle-sidebar'])

const toggleSidebar = () => {
  emit('toggle-sidebar')
}
const router = useRouter()
const goToHome = () => {
  router.push('/')
}
const goToAbout = () => {
  router.push('/about')
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f8f8;
  height: 80px;
}

.logo {
  margin-right: 1rem;
}

.wrapper {
  display: flex;
  gap: 1rem;
}
</style>
