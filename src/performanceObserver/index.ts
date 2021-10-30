import { get } from '../measurements/basic'

type PerformanceMetricsHandler = (param: PerformanceEntry) => never

const startObserver = (callback: PerformanceMetricsHandler) => {
    const performanceObserver = new PerformanceObserver(entries => {
        entries.getEntries().forEach(entry => callback(entry))
    });

    performanceObserver.observe({entryTypes: get()})
}

export { startObserver, PerformanceMetricsHandler }