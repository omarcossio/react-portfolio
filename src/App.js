import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {CSSTransition} from 'react-transition-group';

function App() {
  return (
    <>

    <Router>
          <div>
            <Header />
            
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
          </div>
        </Router>
</>

  );
}


export default App;
