import React from 'react';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Main from './Components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import AlanHooks from './Hooks/AlanHooks';


function App() {

  AlanHooks();

  return (
    <Router>
        <div className="App">
          <Banner/>

            <Switch>

            <Route path="/Contact">
                <Contact/>
            </Route>
              
              <Route path="/Skills">
                <Skills/>
              </Route>


              <Route path="/">
                <Main/>
              </Route>

            </Switch>

          <Footer/>

        </div>

    </Router>
  );
}

export default App;
