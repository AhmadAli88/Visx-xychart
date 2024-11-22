import './App.css';
import AreaChart from './components/AreaChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import ScatterPlot from './components/ScatterPlot';
import StackedBarChart from './components/StackedBarChart';

function App() {
  return (
    <div>
      <LineChart />
      <BarChart />
      <AreaChart />
      <PieChart/>
      <div>
        <ScatterPlot />
      </div>
      <div>
        <StackedBarChart/>
      </div>
    </div>
  );
}

export default App;
