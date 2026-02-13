interface Base {
	id: string
	url: string
}

export interface Film extends Base {
	title: string
	original_title: string
	original_title_romanised: string
	description: string
	director: string
	producer: string
	release_date: string
	running_time: string
	rt_score: string
	people: string[]
	species: string[]
	vehicles: string[]
}
