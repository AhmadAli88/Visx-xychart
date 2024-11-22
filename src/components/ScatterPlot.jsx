
import { Circle } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';

const data = [
  { x: 10, y: 30 },
  { x: 20, y: 50 },
  { x: 30, y: 80 },
  { x: 40, y: 60 },
  { x: 50, y: 90 },
];

const xScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => d.x))],
  range: [0, 400],
});

const yScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => d.y))],
  range: [300, 0],
});

const ScatterPlot = () => (
  <svg width={500} height={400}>
    <g transform="translate(50, 50)">
      {data.map((d, i) => (
        <Circle
          key={i}
          cx={xScale(d.x)}
          cy={yScale(d.y)}
          r={5}
          fill="steelblue"
        />
      ))}
      <AxisBottom top={300} scale={xScale} />
      <AxisLeft scale={yScale} />
    </g>
  </svg>
);

export default ScatterPlot;
