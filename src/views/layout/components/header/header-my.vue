<template>
	<m-popover class="flex items-center" placement="bottom-left">
		<template #reference>
			<div
				class="guide-my relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100 dark:hover:bg-zinc-900"
			>
				<!-- 头像 -->
				<img
					class="w-3 h-3 rounded-sm"
					src="https://img1.baidu.com/it/u=2625325923,3446322967&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
				/>
				<!-- 下箭头 -->
				<m-svg-icon class="h-1.5 w-1.5 ml-0.5" name="down-arrow" fillClass="fill-zinc-900 dark:fill-zinc-300"></m-svg-icon>
				<!-- vip 标记 -->
				<m-svg-icon name="vip" class="w-1.5 h-1.5 absolute right-[16px] bottom-0"></m-svg-icon>
			</div>
			<div>
				<!--				<m-button class="guide-my" icon="profile" iconColor="#fff"></m-button>-->
			</div>
		</template>

		<div class="w-[140px] overflow-hidden">
			<div
				class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
				v-for="item in menuArr"
				:key="item.id"
			>
				<m-svg-icon :name="item.icon" class="w-1.5 h-1.5 mr-1" fillClass="fill-zinc-900 dark:fill-zinc-300"></m-svg-icon>
				<span class="text-zinc-800 dark:text-zinc-300 text-sm">{{ item.title }}</span>
			</div>
		</div>
	</m-popover>
</template>

<script setup lang="ts">
// 构建 menu 数据源
const menuArr = [
	{
		id: 0,
		title: '个人资料',
		icon: 'profile',
		path: '/profile'
	},
	{
		id: 1,
		title: '升级 VIP',
		icon: 'vip-profile',
		path: '/member'
	},
	{
		id: 2,
		title: '退出登录',
		icon: 'logout',
		path: ''
	}
]
</script>

<style lang="scss" scoped></style>
