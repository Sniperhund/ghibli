<script setup lang="ts">
const { urls } = defineProps<{ urls: string[] }>()

const { data, pending, refresh } = useAsyncData<Person[]>(
	"people",
	async (_nuxtApp, { signal }) => {
		let people: Person[] = []

		// Some films include all characters, for that case
		if (urls[0] && urls[0].endsWith("/people/")) {
			people = await $fetch<Person[]>(urls[0], { signal })
		} else {
			people = await Promise.all(
				urls.map((url) => $fetch<Person>(url, { signal })),
			)
		}

		return people.filter(
			(p) => p != undefined && !(p.status && p.status >= 400),
		)
	},
)

// TODO: Find a way to calculate so it looks nice at all screen sizes.
const peoplePerPage = 10
const page = ref(1)

const paginatedPeople = computed(() => {
	if (!data.value) return []

	const start = (page.value - 1) * peoplePerPage
	const end = start + peoplePerPage

	return data.value.slice(start, end)
})
</script>

<template>
	<Transition name="page" mode="out-in">
		<div
			:key="page"
			class="grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] min-h-80 gap-4"
		>
			<PersonCard
				v-for="person in paginatedPeople"
				:key="person.id"
				:person="person"
			/>
		</div>
	</Transition>
	<UPagination
		class="flex justify-center"
		v-if="data"
		v-model:page="page"
		:items-per-page="peoplePerPage"
		:total="data.length"
	/>
</template>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
	transition:
		transform 0.2s ease,
		opacity 0.2s ease-in-out;
}

.page-enter-from {
	opacity: 0;
	transform: translateY(10px);
}

.page-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
