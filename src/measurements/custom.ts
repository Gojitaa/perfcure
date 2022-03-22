import { EntryTransformer } from "../types";

const transformEntry = (name: string, entry: PerformanceEntry) => Object.assign(entry, { featureName: name })
const customEntryTypes = ['resource', 'measure', 'longtask', 'element'] 
const customPerformanceObserver = (name: string, performanceEntryHandler: EntryTransformer) => {
    try {
        const performanceObserver = new PerformanceObserver(entries => {
            entries.getEntries().forEach(entry => performanceEntryHandler(transformEntry(name, entry)))
        });
		
        return (entryTypes: string[] = customEntryTypes) => {
            performanceObserver.observe({ entryTypes })
            return performanceObserver
        }
    } catch(error) {
        console.log(error)
    }

    return () => null;
}

export { customPerformanceObserver }