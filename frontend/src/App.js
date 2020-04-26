import React from 'react';

import Header from './components/Header';
import CustomChartsContainer from './containers/CustomChartsContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CustomChartsContainer />
    </div>
  );
}

export default App;
