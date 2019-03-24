import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import GetDetails from './components/GetDetails';

function App() {
  return (
    <Router>
      <Route path="/get-details" component={GetDetails} />
    </Router>
  );
}


export default App;
