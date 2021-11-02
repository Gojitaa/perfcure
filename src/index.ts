import { startObserver, PerformanceMetricHandler } from "./performanceObserver/index";
export default class PerfCure {
	init(callback: PerformanceMetricHandler) {
		startObserver(callback);
	}
};