import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom'
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';
import RestaurantPage from './pages/restaurants/restaurant.component';
function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/signin' component={SignInSignUpPage} />
      <Route exact path='/restaurant' component={RestaurantPage} />
   
     
    </div>
  );
}

export default App;
