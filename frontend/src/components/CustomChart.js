import React, { Component } from 'react';
import Chart from 'react-google-charts';

class CustomChart extends Component {
	render() {
		return (
			<Chart
        width={400}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={
          [
            ["A", "B"],
            ["X", 1],
            ["Y", 2]
          ]
        }
			/>
		);
	}
}

export default CustomChart;
