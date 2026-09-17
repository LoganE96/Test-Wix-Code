import Chart from "https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js";

class DynamicChart extends HTMLElement {

	constructor() {
		super();
	}
	
	/*static get observedAttributes() {
		return [
			"chart-type",
			"chart-data"
		];
	}*/

	connectedCallback() {
		const canvas = document.createElement("canvas");
		this.appendChild(canvas);

		new Chart(canvas, {
			type: 'bar',
			data: {
				labels: ['Red', 'Green', 'Yellow'],
				datasets: [{
					label: 'Count',
					data: [12,19,1],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
			
		console.log("3. - Connected");
	}

	/*attributeChangedCallback(name, oldValue, newValue) {
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
	}

	renderPieChart(data) {
		console.log("Pie chart rendered from Github function.");
		// Chart.js pie chart logic.
	}*/
}

customElements.define(
	"dynamic-chart",
	DynamicChart
);
