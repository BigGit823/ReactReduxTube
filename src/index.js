import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBtVqr2v6dyVduSrtavmeqx1k5z64AQjvM';

const App = () => {
  return <div>
    <SearchBar />
  </div>;
}


ReactDOM.render(<App/>, document.querySelector('.container'));