import React, { Component } from 'react';
import './App.css';
// import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table'
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import './appStyles.css';

function App() {
  return (
    <div className="App">
      <Table />
      <ParentComp />
    </div>
  );
}

export default App;
