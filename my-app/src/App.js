import React, { Component } from 'react';
import './App.css';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table'
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
import './appStyles.css';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext'

function App() {
  return (
    <div className="App">
      <UserProvider value="Sai Krishna">
        <ComponentC />
      // </UserProvider>
    </div>
  );
}

export default App;
