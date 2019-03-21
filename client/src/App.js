import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import GetDetails from './components/GetDetails';
import Upload from "./components/Upload";

function App() {
  return (
    <Router>
      <Route path="/GetDetails" component={GetDetails} />
      <Route path="/upload-photo" component={Upload} />
    </Router>

  );
}


export default App;
