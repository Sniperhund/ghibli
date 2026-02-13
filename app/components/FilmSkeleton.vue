<template>
	<UCard
		:ui="{ body: 'flex flex-col overflow-hidden gap-4 p-4' }"
		class="cursor-progress"
	>
		<USkeleton class="w-full h-32" />

		<div class="flex flex-col gap-2 justify-between">
			<div>
				<!-- The divs are used to "simulate" line height -->
				<div class="h-7">
					<USkeleton class="w-3/4 h-4.5" />
				</div>
				<div class="h-5 mb-2">
					<USkeleton class="w-3/4 h-3.5" />
				</div>

				<div class="space-y-1 h-15">
					<USkeleton class="w-full h-4" />
					<USkeleton class="w-5/6 h-4" />
					<USkeleton class="w-3/4 h-4" />
				</div>
			</div>

			<USkeleton class="h-4 w-7/10" />
		</div>
	</UCard>
</template>
