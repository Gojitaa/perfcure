import { EntryTransformer } from "../types";

const transformEntry = (name: string, entry: PerformanceEntry) => Object.assign(entry, { metricName: name })

const basicPerformanceObserver = (name: string, performanceEntryHandler: EntryTransformer) => {
    try {
        const performanceObserver = new PerformanceObserver(entries => {
            entries.getEntries().forEach(entry => performanceEntryHandler(transformEntry(name, entry)))
        });
		
        return () => {
            performanceObserver.observe({ type: 'paint', buffered: true })
            return performanceObserver
        }
    } catch(error) {
        console.log(error)
    }

    return () => null;
}

export { basicPerformanceObserver }