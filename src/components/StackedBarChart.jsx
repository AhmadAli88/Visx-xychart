
import { BarStack } from '@visx/shape';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { LegendOrdinal } from '@visx/legend';
import { AxisBottom, AxisLeft } from '@visx/axis'; 

const data = [
  { year: '2020', apples: 30, oranges: 20, bananas: 40 },
  { year: '2021', apples: 20, oranges: 30, bananas: 50 },
  { year: '2022', apples: 50, oranges: 30, bananas: 60 },
];

const keys = ['apples', 'oranges', 'bananas'];

const xScale = scaleBand({
  domain: data.map((d) => d.year),
  range: [0, 500],
  padding: 0.2,
});

const yScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => d.apples + d.oranges + d.bananas))],
  range: [300, 0],
});

const colorScale = scaleOrdinal({
  domain: keys,
  range: ['#f00', '#0f0', '#00f'],
});

const StackedBarChart = () => (
  <svg width={600} height={400}>
    <g transform="translate(50, 50)">
      <BarStack
        data={data}
        keys={keys}
        x={(d) => d.year}
        xScale={xScale}
        yScale={yScale}
        color={colorScale}
      />
      <AxisBottom top={300} scale={xScale} />
      <AxisLeft scale={yScale} />
    </g>
    <LegendOrdinal scale={colorScale} direction="row" itemMargin="0 15px" />
  </svg>
);

export default StackedBarChart;
