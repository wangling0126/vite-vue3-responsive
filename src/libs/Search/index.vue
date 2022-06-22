<template>
	<div ref="containerTarget" class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40">
		<div>
			<!--			搜索图标-->
			<m-svg-icon class="w-1.5 h-1.5 absolute left-2 translate-y-[-50%] top-[50%]" name="search" color="#707070"></m-svg-icon>
			<!-- 输入框 -->
			<input
				type="text"
				class="block w-full h-[44px] pl-4 text-sm outline-0 bg-zinc-100 dark:bg-zinc-800 caret-zinc-400 rounded-xl text-zinc-900 dark:text-zinc-200 tracking-wide font-semibold border border-zinc-100 dark:border-zinc-700 duration-500 group-hover:bg-white dark:group-hover:bg-zinc-900 group-hover:border-zinc-200 dark:group-hover:border-zinc-700 focus:border-red-300"
				placeholder="搜索"
				v-model="inputValue"
				@focus="onFocusHandler"
				@blur="onBlurHandler"
				@keyup.enter="onSearchHandler"
			/>
			<!-- 删除按钮 -->
			<m-svg-icon
				name="input-delete"
				class="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 duration-500 cursor-pointer"
				@click="inputValue = ''"
				v-if="inputValue"
			></m-svg-icon>
			<!-- 分割线 -->
			<div
				class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100"
			></div>
			<!-- TODO: 搜索按钮(通用组件) -->
			<m-button
				icon="search"
				iconColor="#ffffff"
				class="absolute translate-y-[-50%] top-[50%] right-1 rounded-xl duration-500 opacity-0 group-hover:opacity-100"
				@click="onSearchHandler"
			></m-button>
		</div>
		<!--		下拉区-->
		<transition name="slide">
			<div
				v-if="$slots.dropdown"
				v-show="isFocus"
				class="max-h-[368px] w-full text-base overflow-auto bg-white dark:bg-zinc-800 absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 dark:border-zinc-600 duration-200 hover:shadow-3xl scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
			>
				<slot name="dropdown" />
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts" name="searchVue">
import { useVModel, onClickOutside } from '@vueuse/core'
import { ref, watch } from 'vue'

const props = defineProps({
	modelValue: {
		type: String,
		required: true
	}
})
const emit = defineEmits(['update:modelValue', 'onSearchHandler', 'focus', 'blur', 'input'])
// 输入文本
const inputValue = useVModel(props)
watch(inputValue, newVal => {
	emit('input', newVal)
})
const isFocus = ref(false)
// focus事件
const onFocusHandler = (event: InputEvent) => {
	isFocus.value = true
	emit('focus', event)
}
const onBlurHandler = (event: InputEvent) => {
	emit('blur', event)
}
/**
 * 点击区域外隐藏 dropdown
 */
const containerTarget = ref(null)
onClickOutside(containerTarget, () => {
	isFocus.value = false
})
const onSearchHandler = () => {
	console.log('搜索触发了', inputValue.value)
	emit('onSearchHandler', inputValue.value)
}
</script>

<style scoped lang="scss">
.slide-enter-active {
	transition: all 0.5s;
}

.slide-leave-active {
	transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateY(40px);
	opacity: 0;
}
</style>
