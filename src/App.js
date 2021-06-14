import React from 'react';
import './App.css';
import DrugList from './components/DrugList';

const drugs = [
  {
    name: 'Paracetamol',
    totalNum: 10,
    doses: [1, 0.5, 0.5],
    time: ['8am', '2pm', '8pm'],
  },
  {
    name: 'Fevarin',
    totalNum: 10,
    doses: [1, 0.5, 0.5],
    time: ['8am', '2pm', '8pm'],
  },
];

function App() {
  return (
    <div className="App">
      <DrugList drugs={drugs} />
    </div>
  );
}

export default App;
