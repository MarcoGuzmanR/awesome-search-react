import React from 'react';

import './App.scss';

import HeaderComponent  from './components/headerComponent/HeaderComponent';
import SearchComponent  from './components/searchComponent/SearchComponent';
import ResultsComponent from './components/resultsComponent/ResultsComponent';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <HeaderComponent />
        <SearchComponent />
        <ResultsComponent />
      </div>
    );
  }
}

export default App;
