import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Form from './Pages/Form/Form';
import ResultList from './Pages/ResultList/ResultList';
import DetailedResult from './Pages/DetailedResult/DetailedResult';
import Payment from './Pages/Checkout/Payment';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
      <Route path='/result/detailedresult'> <DetailedResult /> </Route> 
      <Route path='/result'> <ResultList /> </Route> 
      <Route path='/payment'> <Payment /> </Route> 
      <Route path='/'>  <Form /> </Route>
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
