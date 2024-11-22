
import { AreaClosed } from '@visx/shape';
import { scaleTime, scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveMonotoneX } from '@visx/curve';

const data = [
  { date: new Date('2022-01-01'), value: 30 },
  { date: new Date('2022-02-01'), value: 50 },
  { date: new Date('2022-03-01'), value: 80 },
  { date: new Date('2022-04-01'), value: 60 },
  { date: new Date('2022-05-01'), value: 90 },
];

// Scales
const xScale = scaleTime({
  domain: [Math.min(...data.map(d => d.date)), Math.max(...data.map(d => d.date))],
  range: [0, 500],
});

const yScale = scaleLinear({
  domain: [0, Math.max(...data.map(d => d.value))],
  range: [300, 0],
});

const AreaChart = () => (
  <svg width={600} height={400}>
    <g transform="translate(50, 50)">
      <AreaClosed
        data={data}
        x={(d) => xScale(d.date)}
        y={(d) => yScale(d.value)}
        yScale={yScale}
        stroke="steelblue"
        fill="lightblue"
        curve={curveMonotoneX}
      />
      <AxisBottom top={300} scale={xScale} numTicks={5} />
      <AxisLeft scale={yScale} />
    </g>
  </svg>
);

export default AreaChart;
