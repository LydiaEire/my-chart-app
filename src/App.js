import React from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ['Food', 'Popularity Percentage'],
  ['Pizza', 30],
  ['Sushi', 20],
  ['Burgers', 25],
  ['Pasta', 15],
  ['Salad', 10],
];

const options = {
  title: 'Most Popular Food in the World',
  is3D: true,
};

function App() {
  return (
    <div className="App">
      <h1>World Food Popularity</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default App;
