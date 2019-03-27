import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import GetDetails from './components/GetDetails';
import Upload from './components/Upload';
import Splash from './components/SplashPage';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/get-details" component={GetDetails} />
        <Route exact path="/upload-photo" component={Upload} />
        <Route exact path="/" render={props => <Splash {...props} />} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />

      </div>
    </Router>
  );
}

export default App;
