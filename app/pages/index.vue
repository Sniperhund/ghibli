<script setup lang="ts">
import { type SelectItem } from "@nuxt/ui"

const sortOptions = ref<SelectItem[]>([
	{
		label: "A-Z",
		id: "a-z",
	},
	{
		label: "Z-A",
		id: "z-a",
	},
	{
		label: "Newest",
		id: "newest",
	},
	{
		label: "Oldest",
		id: "oldest",
	},
	{
		label: "Best Rating",
		id: "best-rating",
	},
	{
		label: "Worst Rating",
		id: "worst-rating",
	},
])

const search = ref("")
const sort = ref<SortOptions>("a-z")
</script>

<template>
	<div class="mb-4 space-x-1.5">
		<UInput v-model="search" placeholder="Search..." size="lg" />
		<USelect
			v-model="sort"
			value-key="id"
			:items="sortOptions"
			size="lg"
			class="w-32"
		/>
	</div>
	<FilmList :limit="9" :search="search" :sort="sort" />
</template>
