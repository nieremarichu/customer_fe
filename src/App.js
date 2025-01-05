import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer';
// import UpdateCustomer from './components/UpdateCustomer';
// import ViewCustomer from './components/ViewCustomer';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CustomerList} />
        <Route path="/add" component={AddCustomer} />
        {/* <Route path="/update/:id" component={UpdateCustomer} /> */}
        {/* <Route path="/view/:id" component={ViewCustomer} /> */}
      </Switch>
    </Router>
  );
};

export default App;
