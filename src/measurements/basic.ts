import { EntryTransformer } from "../types";

const getBasicMetrics = () => {
 return ['paint', 'largest-contentful-paint', 'first-input']
}

const transformEntry = (entry: PerformanceEntry) => entry

const basicPerformanceObserver = (name: string, performanceEntryHandler: EntryTransformer) => {
    try {
        const performanceObserver = new PerformanceObserver(entries => {
            entries.getEntries().forEach(entry => transformEntry(entry))
        });
		
        return () => {
            performanceObserver.observe({ entryTypes: getBasicMetrics() })
            return performanceObserver
        }
    } catch(error) {
        console.log(error)
    }

    return () => null;
}

export { basicPerformanceObserver }