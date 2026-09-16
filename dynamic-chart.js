console.log("dynamic-chart.js loaded.");

class DynamicChart extends HTMLElement {

	constructor() {
		super();
	}
	
	static get observedAttributes() {
		return [
			"chart-type",
			"chart-data"
		];
	}

	connectedCallback() {
		console.log("Dynamic Chart connected.");
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log("Attribute change detected.");
		console.log("Received Attribute:", newValue);
		
		if (name === "chart-data") {
			this.renderChart();
		}
	}

	renderChart() {
		const chartType = this.getAttribute("chart-type");

		const chartData = JSON.parse(this.getAttribute("chart-data"));

		if (!chartData) {
			return;
		}

		if (chartType === "line") {
			this.renderLineChart(chartData);
		}

		if (chartType === "pie") {
			this.renderPieChart(chartData);
		}
	}

	renderLineChart(data) {
		// Chart.js line chart logic.
	}

	renderPieChart(data) {
		// Chart.js pie chart logic.
	}
}

customElements.define(
	"dynamic-chart",
	DynamicChart
);
