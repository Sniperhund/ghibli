// API Specific

interface Base {
	id: string
	url: string

	// This is only since the API returns 200 for errors.
	status?: number
}

export interface Film extends Base {
	title: string
	original_title: string
	original_title_romanised: string
	description: string
	director: string
	producer: string
	movie_banner: string
	release_date: string
	running_time: number
	rt_score: number
	people: string[]
	species: string[]
	vehicles: string[]
}

export interface Person extends Base {
	name: string
	gender: string
	age: string
	eye_color: string
	hair_color: string
	films: string[]
	species: string
}

// App Specific

export type SortOptions =
	| "a-z"
	| "z-a"
	| "newest"
	| "oldest"
	| "best-rating"
	| "worst-rating"
