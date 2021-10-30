import { get } from '../measurements/basic'

type PerformanceMetricsHandler = (param: PerformanceObserverEntryList) => never

const startObserver = (callback: PerformanceMetricsHandler) => {
    const performanceObserver = new PerformanceObserver(entries => {
       callback(entries) 
    });

    performanceObserver.observe({entryTypes: get()})
}

export { startObserver, PerformanceMetricsHandler }