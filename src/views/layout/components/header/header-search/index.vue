<template>
	<div class="flex-1">
		<m-search v-model:modelValue="inputValue">
			<template #dropdown>
				<div :aa="'aa'">aasasas</div>
			</template>
		</m-search>
	</div>
</template>

<script setup lang="ts" name="headerSearch">
import { ref } from 'vue'
const inputValue = ref('')
</script>

<style scoped lang="scss"></style>
