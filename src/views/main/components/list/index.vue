<template>
	<div>
		<!-- 列表处理 -->
		<!--		<m-infinite-list v-model="isLoading" :isFinished="isFinished" @onLoad="getPexelsData">-->
		<m-waterfall :data="pexelsStore.pexelsList" :column="isMobileTerminal ? 2 : 5" :picturePreReading="true" class="w-full px-1">
			<template #default="{ item, width }">
				<itemVue :data="item" :width="width" @click="onToPins" />
			</template>
		</m-waterfall>
		<!--		</m-infinite-list>-->
		<!-- 大图详情处理 -->
		<!--		<transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">-->
		<!--			<pins-vue v-if="isVisiblePins" :id="currentPins.id" />-->
		<!--		</transition>-->
		<!--		<div class="flex flex-wrap justify-between">-->
		<!--			<item-vue v-for="item in pexelsStore.pexelsList" :key="item.id" :data="item" class="px-1 py-2"></item-vue>-->
		<!--		</div>-->
	</div>
</template>

<script setup>
import itemVue from './item.vue'
import { isMobileTerminal } from '@/utils/flexible'
import { usePexelsStore } from '@/store/modules/pexels'
const pexelsStore = usePexelsStore()
const onToPins = () => {}
</script>
