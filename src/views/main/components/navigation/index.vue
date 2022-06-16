<template>
	<component :is="componentName"></component>
</template>

<script setup lang="ts" name="main">
import { isMobileTerminal } from '@/utils/flexible'
import { computed } from 'vue'
const componentName = computed(() => {
	return isMobileTerminal.value ? () => import('./mobile/index.vue') : () => import('./pc/index.vue')
})
</script>

<style scoped lang="scss"></style>
