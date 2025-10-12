<template>
  <main>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <template v-if="isLogin">
          <component :is="Component" />
        </template>
        <template v-else>
          <Layout>
            <component :is="Component" />
          </Layout>
        </template>
      </keep-alive>
    </router-view>
  </main>
</template>

<script lang="ts" setup>
import Layout from '@/componets/layout/index.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLogin = ref(true)

onMounted(() => {
  console.log('路径:', route.path)
})

watch(
  () => route.fullPath,
  (n, o) => {
    if (n === '/login') {
      isLogin.value = true
    } else {
      isLogin.value = false
    }
  }
)
</script>
