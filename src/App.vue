<script setup>
import HeaderNav from './components/Headerx.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue'
import DynamicDialog, { openDialog } from './components/DynamicDialog.vue'
import LoginForm from './views/LoginForm.vue'
import RegisterForm from './views/RegisterForm.vue'
import UserInfoForm from './views/UserInfoForm.vue'
const dynamicDialog = ref(null)
const showLoginDialog = () => {
  openDialog(LoginForm, 'Login')
}

const showRegisterDialog = () => {
  openDialog(RegisterForm, 'Register')
}

const showUserInfoDialog = () => {
  openDialog(UserInfoForm, 'Edit User Info')
}


const isSidebarVisible = ref(true)

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}
</script>

<template>
  <div id="app">
    <!-- 页头导航组件 -->
    <HeaderNav @toggle-sidebar="toggleSidebar" />

    <!-- 主内容区域 -->
    <main class="main-layout">
      <!-- 左侧栏 -->
      <aside class="sidebar" v-show="isSidebarVisible">
        左侧栏内容
      </aside>

      <!-- 右侧内容区域 -->
      <div class="content-wrapper">
        <!-- 上方内容区域 -->
        <section class="content">
          <router-view></router-view>
        </section>

        <!-- 下方页脚区域 -->
        <Footer />
      </div>
    </main>
  </div>
</template>

<style scoped>


.main-layout {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 285px;
  background-color: #f0f0f0;
  padding: 1rem;
  overflow-y: auto;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}
</style>
