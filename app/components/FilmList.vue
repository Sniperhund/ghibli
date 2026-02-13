<script setup lang="ts">
const { limit } = defineProps<{ limit: number }>()

const {
	data: films,
	status,
	error,
	refresh,
} = useApiFetch<Film[]>("/films", {
	query: {
		limit, // For some reason limit isn't working... even though it's documented
	},
})

// Small workaround...
const limitedFilms = computed(() =>
	Array.isArray(films.value) ? films.value?.slice(0, limit) : [],
)
</script>

<template>
	<section
		class="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4"
		v-if="status != 'error'"
	>
		<FilmCard
			@click="navigateTo(`/film/${film.id}`)"
			v-if="status == 'success'"
			v-for="film in limitedFilms"
			:key="film.id"
			:film="film"
		/>

		<!-- This won't actually be displayed, since SSR is on... that is a stupid mistake -->
		<FilmSkeleton v-else v-for="i in limit" :key="`film-${i}`" />
	</section>
	<ErrorMessage v-else :refresh="refresh" />
</template>
