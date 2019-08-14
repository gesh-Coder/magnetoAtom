import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch}from 'react-router-dom' ;
import television from './components/Page_component/television';
import Brand from './components/Page_component/brand';
import Cinema from './components/Page_component/cinema';
import TVFilm from './components/Page_component/tvFilm';
import TVCategory from './components/Page_component/tvCategory';
import BrandFiche from './components/Page_component/brandFiche';
import BrandClient from './components/Page_component/brandClient';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path ="/" component={ television } />
          <Route exact path ="/brand" component={ Brand } />
          <Route exact path ="/Cinema" component={ Cinema } />
          <Route exact path ="/tvFilm" component={ TVFilm } />
          <Route exact path ="/TVCategory" component={ TVCategory } />
          <Route exact path ="/BrandFiche" component={ BrandFiche } />
          <Route exact path ="/BrandClient" component={ BrandClient } />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
