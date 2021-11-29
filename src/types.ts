type PerfCureItem = {
	name: string,
	duration: number,
	endpoint: string,
	startTime: number,
	endTime: number,
	isFromCache: boolean,
	protocol: string,
	transferSize: number,
	encodedBodySize: number,
	decodedBodySize: number
} | PerformanceEntry

type CustomMetricHandler = (param: PerfCureItem) => never

type EntryTransformer = (param: PerfCureItem) => never

type PerfCureEntry = {
	type: string,
	metrics: PerfCureItem[],
	observer: PerformanceObserver
}

export { CustomMetricHandler, PerfCureEntry, EntryTransformer, PerfCureItem }