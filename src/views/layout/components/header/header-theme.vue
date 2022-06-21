<template>
	<div>
		<m-popover>
			<template #reference>
				<m-svg-icon
					:name="svgIconName"
					class="guide-theme w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60 dark:hover:bg-zinc-900"
					fillClass="fill-zinc-900 dark:fill-zinc-300"
				></m-svg-icon>
			</template>
			<div class="w-[140px] overflow-hidden">
				<div
					class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
					v-for="item in themeArr"
					:key="item.id"
					@click="onItemClick(item)"
				>
					<m-svg-icon :name="item.icon" class="w-1.5 h-1.5 mr-1" fillClass="fill-zinc-900 dark:fill-zinc-300"></m-svg-icon>
					<span class="text-zinc-800 dark:text-zinc-300 text-sm">{{ item.name }}</span>
				</div>
			</div>
		</m-popover>
	</div>
</template>

<script setup lang="ts" name="header-theme">
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants'
import { useThemeStore } from '@/store/modules/theme'
import { computed, toRaw } from 'vue'
const themeStore = useThemeStore()
console.log(toRaw(themeStore))
interface Itheme {
	id: string
	type: string
	icon: string
	name: string
}
const themeArr: Itheme[] = [
	{
		id: '0',
		type: THEME_LIGHT,
		icon: 'theme-light',
		name: '极简白'
	},
	{
		id: '1',
		type: THEME_DARK,
		icon: 'theme-dark',
		name: '极夜黑'
	},
	{
		id: '2',
		type: THEME_SYSTEM,
		icon: 'theme-system',
		name: '跟随系统'
	}
]
const svgIconName = computed(() => {
	return themeArr.filter(item => item.type === themeStore.themeType)[0].icon
})
const onItemClick = (item: Itheme) => {
	themeStore.changeThemeType(item.type)
}
</script>

<style scoped lang="scss"></style>
