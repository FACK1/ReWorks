import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import GetDetails from './components/GetDetails';
import Upload from './components/Upload';
import Login from './components/Login';
import ItemDetails from './components/ItemDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/get-details" component={GetDetails} />
        <Route path="/upload-photo" component={Upload} />
        <Route path="/login" component={Login} />
        <Route path="/item-details" component={ItemDetails} />
      </div>
    </Router>
  );
}

export default App;
