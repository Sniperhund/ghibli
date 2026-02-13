<script setup>
useHead({
	meta: [
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
	],
	link: [{ rel: "icon", href: "/favicon.ico" }],
	htmlAttrs: {
		lang: "en",
	},
})

const title = "Studio Ghibli"

useSeoMeta({
	title,
	ogTitle: title,
	ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
	twitterImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
	twitterCard: "summary_large_image",
})
</script>

<template>
	<UApp>
		<UHeader class="mb-8">
			<template #left>
				<NuxtLink to="/">Studio Ghibli</NuxtLink>
			</template>

			<template #right> </template>
		</UHeader>

		<UMain class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
			<NuxtPage />
		</UMain>

		<USeparator />

		<UFooter>
			<template #left>
				<p class="text-sm text-muted"></p>
			</template>

			<template #right>
				<UButton
					to="https://github.com/Sniperhund"
					target="_blank"
					icon="i-simple-icons-github"
					aria-label="GitHub"
					color="neutral"
					variant="ghost"
				/>
			</template>
		</UFooter>
	</UApp>
</template>
