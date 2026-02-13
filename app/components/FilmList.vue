<script setup lang="tsx">
const { limit } = defineProps<{ limit: number }>()

const {
	data: films,
	status,
	error,
} = useApiFetch<Film[]>("/films", {
	query: {
		limit, // For some reason limit isn't working... even though it's documented
	},
})

// Small workaround...
const limitedFilms = computed(() => films.value?.slice(0, limit))
</script>

<template>
	<section
		class="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4"
		v-if="status != 'error'"
	>
		<FilmCard
			v-if="status == 'success'"
			v-for="film in limitedFilms"
			:key="film.id"
			:film="film"
		/>
		<!-- This won't actually be displayed, since SSR is on... that is a stupid mistake -->
		<FilmSkeleton v-else v-for="i in limit" :key="`film-${i}`" />
	</section>
	<section v-else></section>
</template>
