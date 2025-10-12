<template>
  <PagesHeader />
  <div class="layout-container h-[100vh] flex">
    <Menu />
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import Menu from './Menu.vue';
import PagesHeader from './PagesHeader.vue';
</script>

<style lang="less" scoped></style>
