import './App.css';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <pre className="data">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
