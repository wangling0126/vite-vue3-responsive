<template>
	<div>
		<!-- 列表处理 -->
		<m-infinite-list v-model="isLoading" :isFinished="pexelsStore.isFinished" @onLoad="getPexelsData">
			<m-waterfall
				:data="pexelsStore.pexelsList"
				:column="isMobileTerminal ? 2 : 5"
				:picturePreReading="false"
				class="w-full px-1"
			>
				<template #default="{ item, width }">
					<itemVue :data="item" :width="width" @click="onToPins" />
				</template>
			</m-waterfall>
		</m-infinite-list>
		<!-- 大图详情处理 -->
		<!--		<transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">-->
		<!--			<pins-vue v-if="isVisiblePins" :id="currentPins.id" />-->
		<!--		</transition>-->
		<!--		<div class="flex flex-wrap justify-between">-->
		<!--			<item-vue v-for="item in pexelsStore.pexelsList" :key="item.id" :data="item" class="px-1 py-2"></item-vue>-->
		<!--		</div>-->
	</div>
</template>

<script setup lang="ts">
import itemVue from './item.vue'
import { isMobileTerminal } from '@/utils/flexible'
import { usePexelsStore } from '@/store/modules/pexels'
import { useCategoryStore } from '@/store/modules/category'
import { ref, watch } from 'vue'

const pexelsStore = usePexelsStore()
const categoryStore = useCategoryStore()
const isLoading = ref(false)
const onToPins = () => {}
const getPexelsData = async () => {
	let { page, per_page } = pexelsStore.pageInfo
	// 数据全部加载完成则 return
	if (pexelsStore.isFinished) {
		return
	}
	// 完成第一次请求之后，后续请求让 page 自增
	if (pexelsStore.pexelsList.length) {
		page++
	}
	await pexelsStore.changePexelsList({
		page: page,
		per_page: per_page,
		query: categoryStore.currentCategoryName
	})
	// 修改 loading 标记
	isLoading.value = false
}

/**
 * 监听搜索内容项的变化
 */
watch(
	() => categoryStore.currentCategoryName,
	(newVal, oldVal) => {
		console.log(newVal, oldVal)
		pexelsStore.pageInfo.total = null
		pexelsStore.pageInfo.page = 1
		pexelsStore.pexelsList = []
		getPexelsData()
	}
)
</script>
