<script setup lang="ts">
const route = useRoute()

const { data: film } = useApiFetch<Film>(`/films/${route.params.id}`)

watchEffect(() => {
	// The API doesn't return the correct status codes so it's a workaround
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
	<!-- As I learned with FilmList.vue, it should be fetched before the user even reaches this point
         Just as a precaution does it check if film exists -->
	<template v-if="film">
		<section class="grid grid-cols-1 min-[55rem]:grid-cols-2 gap-4 mb-6">
			<NuxtImg
				:src="film.movie_banner"
				:alt="film.title"
				class="w-full object-cover rounded-xl mb-2"
			/>

			<div class="space-y-4">
				<div>
					<h1
						class="text-3xl md:text-4xl font-bold dark:text-white text-black"
					>
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
		</section>

		<section class="space-y-2">
			<h2 class="text-xl font-semibold">People</h2>
			<PersonList :urls="film.people" />
		</section>
	</template>
</template>
