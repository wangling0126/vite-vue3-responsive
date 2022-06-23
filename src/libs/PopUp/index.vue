<template>
	<Teleport to="body">
		<!--		modal层-->
		<transition name="fade">
			<div
				class="fixed left-0 right-0 bottom-0 top-0 h-screen w-full bg-zinc-900/80 z-40"
				@click="isOpen = false"
				v-if="isOpen"
			></div>
		</transition>
		<!--		内容区-->
		<transition name="popup-down-up">
			<div
				class="dark:bg-zinc-800 fixed left-0 right-0 bg-white z-50 max-h-[80%] overflow-y-auto bottom-0"
				v-if="isOpen"
				v-bind="$attrs"
			>
				<!--			内容插槽-->
				<slot></slot>
			</div>
		</transition>
	</Teleport>
</template>

<script setup lang="ts" name="pop-up">
import { defineEmits, watch } from 'vue'
import { useScrollLock, useVModel } from '@vueuse/core'

const props = defineProps({
	visible: {
		type: Boolean,
		required: true
	}
})

// const emit = defineEmits(['update:visible'])
// 通过 useVModel 获取到响应式数据 isOpen，当 isOpen 改变时，会自动触发 update:modelValue
const isOpen = useVModel(props, 'visible')
// 锁定滚动
const locked = useScrollLock(document.body)
watch(isOpen, newVal => {
	locked.value = newVal
})
</script>

<style scoped lang="scss">
// fade 展示动画
.fade-enter-active {
	transition: all 0.3s;
}

.fade-leave-active {
	transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
// popup-down-up 展示动画
.popup-down-up-enter-active {
	transition: all 0.3s;
}

.popup-down-up-leave-active {
	transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
	transform: translateY(100%);
}
</style>
