<template>
  <div class="border-b px-4 py-2">
    <el-page-header back="true">
      <template #icon>
        <el-icon :size="20">
          <img :src="logoImage" alt="logo" style="width: 1em; height: 1em" />
        </el-icon>
      </template>
      <template #title>
        <span>{{ pageTitle }}</span>
      </template>
      <template #content>
        <div class="flex items-center">
          <span class="text-large font-600 mr-3"> 测试系统 </span>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <el-avatar
            :size="32"
            class="mr-3"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
      </template>
    </el-page-header>
  </div>
</template>
<script setup lang="ts">
import logoImage from '@/assets/image/logo.png';

defineProps({
  pageTitle: {
    type: String,
    default: undefined,
  },
})
</script>
