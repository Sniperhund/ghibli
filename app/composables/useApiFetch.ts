import type { AsyncData, UseFetchOptions } from "#app"

export function useApiFetch<DataT = unknown>(
	url: string | Request | Ref<string | Request> | (() => string | Request),
	options?: UseFetchOptions<DataT>,
) {
	const baseURL = import.meta.env.VITE_PUBLIC_BACKEND
	if (!baseURL) throw new Error("BACKEND URL not set")

	const config: UseFetchOptions<DataT> = {
		...options,
		baseURL,
	}

	return useFetch(url, config)
}
