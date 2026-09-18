console.log("Stage 1 - Script loaded.");

class DynamicChart extends HTMLElement {

	constructor() {
		super();
		console.log("Stage 2 - Constructor fired.");
	}

	async connectedCallback() {
		console.log("Stage 3 - Connected to webapp.");

		await this.loadChartJs();

		console.log("Chart.js loaded.", typeof window.chart);
	}

	async loadChartJs() {

		// Already loaded check
		if (Window.Chart) {
			return;
		}

		// Another instance is trying to load it.
		if (DynamicChart.chartJsPromise) {
			return DynamicChart.chartJsPromise;
		}

		DynamicChart.chartJsPromise = new Promise((resolve, reject) => {
			const script = document.createElement("script");

			script.src = "https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js";

			script.onload = () => {
				console.log("Chart.js download complete.");
				resolve();
			}

			script.onerror = (err) => {
				console.error("Failed to load Chart.js", err);
				reject(err);
			}

			document.head.appendChild(script);
		});
		
		return DynamicChart.chartJsPromise;
	}

	render() {
		this.innerHTML = "";

		const canvas = document.createElement("canvas");

		this.appendChild(canvas);

		new Chart(canvas, {
			type: "pie",
			data: {
				labels: ['A', 'B', 'C'],
				datasets: [{
					data: [30, 40, 30]
				}]
			}

			console.log("Chart rendered.");
	}
}

console.log("Stage 4 - Registering.");

customElements.define(
	"dynamic-chart",
	DynamicChart
);

console.log("Stage 5 - Registered.);
