import React, { Component } from 'react';

import CustomChart from '../components/CustomChart';

import '../styles/CustomChartsContainer.css';

class CustomChartsContainer extends Component {
	state = {
		data: [
			[
				["A", "B"],
				["X", 1],
				["Y", 2]
			],
			[
				["A", "B"],
				["X", 1],
				["Y", 2]
			],
			[
				["A", "B"],
				["X", 1],
				["Y", 2]
			],
			[
				["A", "B"],
				["X", 1],
				["Y", 2]
			],
			[
				["A", "B"],
				["X", 1],
				["Y", 2]
			],
			[
				["A", "B"],
				["X", 1],
				["Y", 2]
			],
			[
				["A", "B"],
				["X", 1],
				["Y", 2]
			],
			[
				["A", "B"],
				["X", 1],
				["Y", 2]
			]
		]
	}

	render() {
		return (
			<div className="custom-charts-container">
				{this.state.data.map((data, index) => {
					return <CustomChart key={index} data={data} />
				})}
			</div>
		);
	}
}

export default CustomChartsContainer;
