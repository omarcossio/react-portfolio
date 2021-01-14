import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Container from 'react-bootstrap/Container';
import Card from './components/Card';
import Portfolio from './components/Portfolio';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>

    <Router>
          <div>
            <Navigation />
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
</>

    // <Container>
    // <div className="App">
    //   <div className="App-header">
    //   <Header />
    //   </div>
    //   <div className='About'>
    //     <About />
    //     <Contact />
    //     <Card />
    //     <Portfolio />

    //   </div>
      
    // </div>
    // </Container>
  );
}


export default App;
