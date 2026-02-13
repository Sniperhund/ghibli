<script setup lang="ts">
const route = useRoute()

const { data: film } = useApiFetch<Film>(`/films/${route.params.id}`)

watchEffect(() => {
	// This is a very bad and cheap fix, but since the API doesn't return the correct status codes I can't see another way
	if (film.value && film.value.status && film.value.status >= 400) {
		throw createError({
			status: 404,
			statusText: "Film not found",
		})
	}
})

const formatMinutes = (minutes: number) => {
	const h = Math.floor(minutes / 60)
	const m = minutes % 60

	if (h === 0) return `${m} m`
	if (m === 0) return `${h} h`

	return `${h} h ${m} m`
}
</script>

<template>
	<article v-if="film">
		<div class="grid grid-cols-2 gap-4">
			<NuxtImg
				:src="film.movie_banner"
				:alt="film.title"
				class="w-full object-cover rounded-xl mb-2"
			/>

			<div class="space-y-4">
				<div>
					<h1 class="text-3xl md:text-4xl font-bold text-white">
						{{ film.title }}
					</h1>
					<div class="flex gap-3 text-gray-500">
						<p>
							{{ film.original_title_romanised }}
						</p>
						<p>-</p>
						<p>{{ film.release_date }}</p>
						<p>{{ formatMinutes(film.running_time) }}</p>
					</div>
				</div>

				<p>{{ film.description }}</p>
			</div>
		</div>
	</article>
</template>
