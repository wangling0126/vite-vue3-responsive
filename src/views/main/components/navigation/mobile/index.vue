<template>
	<div>移动端导航栏</div>
</template>

<script setup lang="ts" name="main">
import { getCategory } from '@/api/calatory'
const getCategoryData = async () => {
	const res = await getCategory()
	console.log(res)
}
getCategoryData()
</script>

<style scoped lang="scss"></style>
