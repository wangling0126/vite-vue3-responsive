<template>
	<div class="h-screen">
		<!-- 需要在 tailwind 中定义 h-header、h-main 高度 -->
		<header-vue class="h-header"></header-vue>
		<div class="h-main">
			<main-vue></main-vue>
		</div>
		<floating-vue></floating-vue>
	</div>
</template>

<script setup name="layout" lang="ts">
import headerVue from './components/header/index.vue'
import mainVue from './components/main/index.vue'
import floatingVue from './components/floating/index.vue'
</script>

<style lang="scss" scoped></style>
