<script setup lang="ts">
const { person } = defineProps<{ person: Person }>()
</script>

<template>
	<UCard
		:ui="{ body: 'flex flex-col overflow-hidden gap-4 p-4' }"
		class="transition-shadow hover:shadow-lg"
	>
		<div>
			<h3 class="text-lg font-semibold">
				{{ person.name }}
			</h3>
			<div class="text-sm flex gap-1.5 text-gray-500">
				<p>
					{{ person.gender }}
				</p>
				<p>-</p>
				<p>{{ person.age }}</p>
			</div>
		</div>

		<div class="text-xs text-gray-600 flex flex-wrap gap-2">
			<span>Eyes: {{ person.eye_color }}</span>
			<span>Hair: {{ person.hair_color }}</span>
		</div>
	</UCard>
</template>
