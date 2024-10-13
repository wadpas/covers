<template>
	<header class="bg-white">
		<nav
			class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
			aria-label="Global">
			<div class="flex lg:flex-1">
				<router-link :to="{ name: 'home' }">
					<img
						class="w-auto h-8"
						src="../assets/logo.svg"
						alt="" />
				</router-link>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					@click="mobileMenuOpen = true">
					<span class="sr-only">Open main menu</span>
					<Bars3Icon
						class="w-6 h-6"
						aria-hidden="true" />
				</button>
			</div>
			<PopoverGroup class="hidden lg:flex lg:gap-x-12">
				<a
					href="#"
					class="text-sm font-semibold leading-6 text-sky-900">
					Marketplace
				</a>
				<a
					href="#"
					class="text-sm font-semibold leading-6 text-sky-900">
					Company
				</a>
				<router-link
					:to="{ name: 'add-product' }"
					class="text-sm font-semibold leading-6 text-sky-900">
					Add Product
				</router-link>
			</PopoverGroup>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<router-link
					:to="{ name: 'auth-login' }"
					class="text-sm font-semibold leading-6 text-sky-900">
					Log in
					<span aria-hidden="true">&rarr;</span>
				</router-link>
			</div>
		</nav>
	</header>
</template>

<script setup>
	import { ref } from 'vue'
	import {
		Dialog,
		DialogPanel,
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Popover,
		PopoverButton,
		PopoverGroup,
		PopoverPanel,
	} from '@headlessui/vue'
	import {
		ArrowPathIcon,
		Bars3Icon,
		ChartPieIcon,
		CursorArrowRaysIcon,
		FingerPrintIcon,
		SquaresPlusIcon,
		XMarkIcon,
	} from '@heroicons/vue/24/outline'
	import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
	import AddProduct from '@/views/AddProduct.vue'

	const products = [
		{ name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
		{ name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
		{ name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
		{ name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
		{ name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
	]
	const callsToAction = [
		{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
		{ name: 'Contact sales', href: '#', icon: PhoneIcon },
	]

	const mobileMenuOpen = ref(false)
</script>
