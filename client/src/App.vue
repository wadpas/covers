<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
	import HelloWorld from './components/HelloWorld.vue'
	import GlobalLoader from 'vue-global-loader/GlobalLoader.vue'
	import CircleSpinner from 'vue-global-loader/CircleSpinner.vue'
</script>

<template>
	<GlobalLoader>
		<CircleSpinner />
	</GlobalLoader>
	<RouterView />
</template>
