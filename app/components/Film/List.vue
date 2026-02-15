<script setup lang="ts">
const { limit, search, sort } = defineProps<{
	limit: number
	sort?: SortOptions
	search?: string
}>()

const { data, status, error, refresh } = useApiFetch<Film[]>("/films", {
	query: {
		limit, // For some reason limit isn't working... even though it's documented
	},
})

const filteredFilms = computed<Film[]>(() => {
	// Small workaround... for when the api returns 200 on a error
	if (!Array.isArray(data.value)) return []

	let result = [...data.value]

	if (search)
		result = result.filter((f) =>
			f.title.toLowerCase().includes(search.toLowerCase()),
		)

	if (sort == "a-z") result.sort((a, b) => a.title.localeCompare(b.title))

	if (sort == "z-a") result.sort((a, b) => b.title.localeCompare(a.title))

	if (sort == "newest")
		result.sort((a, b) => Number(b.release_date) - Number(a.release_date))

	if (sort == "oldest")
		result.sort((a, b) => Number(a.release_date) - Number(b.release_date))

	if (sort == "best-rating") result.sort((a, b) => b.rt_score - a.rt_score)

	if (sort == "worst-rating") result.sort((a, b) => a.rt_score - b.rt_score)

	return result
})
</script>

<template>
	<section
		class="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4"
		v-if="status != 'error' && status == 'success' && filteredFilms.length"
	>
		<FilmCard
			class="cursor-pointer"
			role="link"
			@click="navigateTo(`/film/${film.id}`)"
			v-if="status == 'success'"
			v-for="film in filteredFilms"
			:key="film.id"
			:film="film"
		/>

		<!-- This won't actually be displayed, since SSR is on... that is a stupid mistake -->
		<!-- <FilmSkeleton v-else v-for="i in limit" :key="`film-${i}`" /> -->
	</section>
	<ErrorMessage v-else />
</template>
