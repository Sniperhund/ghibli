<script setup lang="ts">
const { refresh } = defineProps<{ refresh?: () => void }>()
</script>

<template>
	<section
		class="w-full min-h-[50vh] flex-1 flex flex-col gap-2 justify-center items-center text-center"
	>
		<h1 class="text-2xl">An error happened</h1>
		<p>
			An error happened while trying to fetch.<br />
			This can happen due to internet troubles or the API may be down.
		</p>

		<template v-if="refresh">
			<p>You can try again</p>
			<span>
				<UButton size="xl" @click="() => refresh()">Retry</UButton>
			</span>
		</template>
	</section>
</template>
