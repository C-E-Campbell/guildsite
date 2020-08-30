import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import axios from 'axios';
const data = [
  { name: 'nikua', value: 0 },
  { name: 'dunir', value: 0 },
  { name: 'aela', value: 0 },
  { name: 'renkai', value: 0 },
  { name: 'pyrai', value: 0 },
  { name: 'tulnar', value: 0 },
  { name: 'vek', value: 0 },
  { name: 'vaelune', value: 0 },
  { name: 'empyrean', value: 0 },
];
const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#DE50B0',
  '#4EEA21',
  '#F02C0E',
  '#6D2EF4',
  '#450D23',
];

export default class PieGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  state = {
    characters: [],
  };

  componentDidMount = async () => {
    await axios.get('/api/v1/auth/demographic').then((res) => {
      console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        let index = data.findIndex(
          (el) => el['name'] === `${res.data[i]['race']}`
        );
        data[`${index}`].value += 100;
      }
      console.log(data);
    });
  };

  render() {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={100}
          fill='#8884d8'
          paddingAngle={5}
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
