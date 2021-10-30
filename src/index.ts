import { startObserver, PerformanceMetricsHandler } from "./performanceObserver/index";
export default class PerfCure {
	init(callback: PerformanceMetricsHandler) {
		startObserver(callback);
	}
};