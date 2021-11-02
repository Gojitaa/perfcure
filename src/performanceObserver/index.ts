import { getBasicMetrics } from '../measurements/basic'

type PerformanceMetricHandler = (param: PerformanceEntry) => never

const startObserver = (callback: PerformanceMetricHandler) => {
    try {
        const performanceObserver = new PerformanceObserver(entries => {
            entries.getEntries().forEach(entry => callback(entry))
        });

        performanceObserver.observe({ entryTypes: getBasicMetrics() })
    } catch(error) {
        console.log(error)
    }
}

export { startObserver, PerformanceMetricHandler }