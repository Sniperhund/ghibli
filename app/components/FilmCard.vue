<script setup lang="ts">
const { film } = defineProps<{ film: Film }>()
</script>

<template>
	<UCard
		:ui="{ body: 'flex flex-col overflow-hidden gap-4 p-4' }"
		class="cursor-pointer"
	>
		<NuxtImg
			:src="film.movie_banner"
			:alt="film.title"
			class="rounded w-full h-38 object-cover shrink-0"
			:placeholder="[350, 152]"
		/>

		<div class="flex flex-col gap-2 justify-between">
			<div>
				<h2 class="text-lg font-semibold">{{ film.title }}</h2>
				<p class="mb-2 text-sm text-gray-500">
					{{ film.original_title_romanised }}
				</p>
				<p class="text-sm line-clamp-3">{{ film.description }}</p>
			</div>

			<div class="text-xs text-gray-600 flex flex-wrap gap-2">
				<span>Director: {{ film.director }}</span>
				<span>Released: {{ film.release_date }}</span>
				<span>Rating: {{ film.rt_score }}</span>
			</div>
		</div>
	</UCard>
</template>
