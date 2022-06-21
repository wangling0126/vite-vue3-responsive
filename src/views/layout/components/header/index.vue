<template>
	<div class="bg-white border-b border-b-zinc-200 px-2 py-1">
		<div class="flex items-center">
			<img
				class="h-4 cursor-pointer mr-2 guide-home"
				src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
				@click="onToHome"
			/>
			<headerSearchVue class="mr-1"></headerSearchVue>
			<headerThemeVue class="mr-1"></headerThemeVue>
			<headerMyVue></headerMyVue>
		</div>
	</div>
</template>

<script setup lang="ts" name="headerVue">
import headerMyVue from './header-my.vue'
import headerThemeVue from './header-theme.vue'
import headerSearchVue from './header-search/index.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const onToHome = () => {
	router.push('/')
}
</script>

<style scoped lang="scss"></style>
