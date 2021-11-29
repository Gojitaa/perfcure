import { EntryTransformer } from "../types";

const createEntryType = (name: string, rawEntry: PerformanceResourceTiming) => ({
	name,
	duration: rawEntry.duration,
	endpoint: rawEntry.name,
	startTime: rawEntry.startTime,
	endTime: rawEntry.responseEnd,
	isFromCache: rawEntry.duration === 0 || rawEntry.transferSize === 0,
	protocol: rawEntry.nextHopProtocol,
	transferSize: rawEntry.transferSize,
	encodedBodySize: rawEntry.encodedBodySize,
	decodedBodySize: rawEntry.decodedBodySize
})

const resourcePerformanceObserver = (name: string, performanceEntryHandler: EntryTransformer) => {
    try {
        const performanceObserver = new PerformanceObserver(entries => {
            entries.getEntries().forEach(entry => {
                performanceEntryHandler(createEntryType(name, entry as PerformanceResourceTiming))
            })
        });
       
		
	    return () => {
            performanceObserver.observe({ type: 'resource', buffered: true }) 
            return performanceObserver
        }
    } catch(error) {
        console.log(error)
    }

    return () => {
        return null
    };
}

export { resourcePerformanceObserver }