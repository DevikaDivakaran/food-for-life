import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
function App() {
  return (
    <div className="App">
      <div className="app-container">
      <Header/>
      <Homepage/>
      </div>
    </div>
  );
}

export default App;
