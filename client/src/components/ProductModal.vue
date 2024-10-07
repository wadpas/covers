<template>
	<Modal
		:isOpen="isOpen"
		@on-close="onClose">
		<div>Product Modal</div>
	</Modal>
</template>

<script setup lang="ts">
	import Modal from './ui/Modal.vue'
	import useProductModal from '@/composable/useProductModal'
	const { isOpen, onClose } = useProductModal()
</script>

<style scoped></style>
