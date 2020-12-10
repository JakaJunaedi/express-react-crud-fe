import React, { Fragment } from 'react';
import './App.css';
import InputProduk from './components/InputProduk';
import { ListProduk } from './components/ListProduk';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputProduk />
        <ListProduk />
        </div>
    </Fragment>
  );
}

export default App;
