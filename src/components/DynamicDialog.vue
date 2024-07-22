<template>
  <el-dialog :visible.sync="visible" :title="dialogTitle" @close="handleClose">
    <component :is="currentComponent" @submit="handleSubmit"></component>
  </el-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import { ElDialog } from 'element-plus'
import LoginForm from '../views/LoginForm.vue'
import RegisterForm from '../views/RegisterForm.vue'
import UserInfoForm from '../views/UserInfoForm.vue'

const visible = ref(false)
const dialogTitle = ref('')

const currentComponent = ref(null)

const openDialog = (component, title) => {
  dialogTitle.value = title
  currentComponent.value = component
  visible.value = true
}

const handleClose = () => {
  visible.value = false
}

const handleSubmit = (data) => {
  console.log('Submitted data:', data)
  visible.value = false
}

watch(visible, (newVal) => {
  if (!newVal) {
    currentComponent.value = null
  }
})

export { openDialog }
</script>

<style scoped>
</style>
