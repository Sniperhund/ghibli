<script setup lang="ts">
const { data: films } = useApiFetch<Film[]>("/films", {
	query: {
		limit: 9, // For some reason limit isn't working...
	},
})
</script>

<template>
	<section class="grid grid-cols-3 gap-4">
		<Film v-for="film in films" :key="film.id" :film="film" />
	</section>
</template>
