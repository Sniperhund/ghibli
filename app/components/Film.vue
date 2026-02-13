<script setup lang="ts">
const props = defineProps<{ film: Film }>()
</script>

<template>
	<UCard>
		<h2>{{ film.title }}</h2>
	</UCard>
</template>
