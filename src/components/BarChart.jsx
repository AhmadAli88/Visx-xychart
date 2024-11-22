import { useState } from 'react';
import { Bar } from '@visx/shape';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Tooltip } from '@visx/tooltip';

const data = [
  { category: 'A', value: 30 },
  { category: 'B', value: 80 },
  { category: 'C', value: 45 },
  { category: 'D', value: 60 },
  { category: 'E', value: 20 },
];

const xScale = scaleBand({
  domain: data.map((d) => d.category),
  range: [0, 500],
  padding: 0.2,
});

const yScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => d.value))],
  range: [300, 0],
});

const BarChart = () => {
  const [tooltip, setTooltip] = useState(null);

  return (
    <div style={{ position: 'relative' }}>
      <svg width={600} height={400}>
        <g transform='translate(50, 50)'>
          {data.map((d) => (
            <Bar
              key={d.category}
              x={xScale(d.category)}
              y={yScale(d.value)}
              width={xScale.bandwidth()}
              height={300 - yScale(d.value)}
              fill='teal'
              onMouseEnter={() =>
                setTooltip({ category: d.category, value: d.value })
              }
              onMouseLeave={() => setTooltip(null)}
            />
          ))}
        </g>
      </svg>
      {tooltip && (
        <Tooltip
          left={xScale(tooltip.category) + 50}
          top={yScale(tooltip.value)}
          style={{ background: 'black', color: 'white' }}
        >
          {`${tooltip.category}: ${tooltip.value}`}
        </Tooltip>
      )}
    </div>
  );
};

export default BarChart;
