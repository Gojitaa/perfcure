import { CustomMetricHandler, PerfCureEntry, PerfCureItem } from "./types";
import { basicPerformanceObserver } from './measurements/basic';
import { resourcePerformanceObserver } from "./measurements/resource";
export default class PerfCure {
	private metricEntries: Map<string, PerfCureEntry> = new Map()
	private perfModules = new Map([
		['basic', basicPerformanceObserver],
		['resource', resourcePerformanceObserver]
	])

	setMetrics = (name: string, entry: PerfCureItem) => {
		this.metricEntries.get(name)?.metrics.push(entry);
	}

	start(name: string, type: string, callback: CustomMetricHandler) {
		const setUpObserver = this.perfModules.get(type);

		const observe = setUpObserver?.(name, entry => {
			this.setMetrics(name, entry);
			callback(entry);
		});

		const observer = observe?.();

		if(!observer) {
			throw new Error('PerformanceObserver setup failure');
		}
		this.metricEntries.set(name, { type, observer, metrics: [] });
	}

	get(name: string) {
		return this.metricEntries.get(name);
	}

	report(endpoint: string) {}
};