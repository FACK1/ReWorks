import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import GetDetails from './components/GetDetails';
import Upload from './components/Upload';
import Splash from './components/SplashPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ItemDetails from './components/ItemDetails';
import Item from './components/Item';
import ItemList from "./components/ItemList";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/get-details" component={GetDetails} />
        <Route exact path="/upload-photo" component={Upload} />
        <Route exact path="/" render={props => <Splash {...props} />} />
        <Route path="/login-form" component={Login} />
        <Route path="/signup-form" component={SignUp} />
        <Route path="/item-details" component={ItemDetails} />
        <Route path="/item-list" component={ItemList} />
      </div>
    </Router>
  );
}

export default App;
