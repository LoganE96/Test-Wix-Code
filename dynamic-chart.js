console.log("1. - Script loaded.");

class DynamicChart extends HTMLElement {

	constructor() {
		super();
		console.log("2. - Contstructor.");
	}
	
	static get observedAttributes() {
		return [
			"chart-type",
			"chart-data"
		];
	}

	connectedCallback() {
		console.log("3. - Connected");
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
		console.log("Line chart rendered from GitHub function.");
		// Chart.js line chart logic.
	}

	renderPieChart(data) {
		console.log("Pie chart rendered from Github function.");
		// Chart.js pie chart logic.
	}
}

console.log("4. - Registering...");

customElements.define(
	"dynamic-chart",
	DynamicChart
);

console.log("5. - Registered.");
