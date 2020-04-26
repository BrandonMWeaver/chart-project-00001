import React, { Component } from 'react';

import Chart from 'react-google-charts';

import '../styles/CustomChart.css';

class CustomChart extends Component {
	render() {
		return (
      <div className="custom-chart">
			  <Chart
          frameBorder={0}
          width={"100%"}
          height={"100%"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={this.props.data}
          options={
            {
              legend: "top",
              is3D: true
            }
          }
			  />
      </div>
		);
	}
}

export default CustomChart;
