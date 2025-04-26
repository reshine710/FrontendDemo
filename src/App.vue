<template>
  <div id="app" style="text-align:center; margin-top: 50px;">
    <el-button type="primary" @click="showMessage">點我一下！</el-button>
    <div v-if="message" style="margin-top: 20px;">{{ message }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  components: {
    ElButton
  },
  setup() {
    const message = ref('')

    function showMessage() {
      message.value = '你好，這是我的前端Demo！'
    }

    return {
      message,
      showMessage
    }
  }
}
</script>
