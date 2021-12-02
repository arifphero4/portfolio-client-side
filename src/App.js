import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Not from "./Pages/Not";
import DetailsProject from "./Pages/Portfolio/DetailsProject";
import Portfolios from "./Pages/Portfolio/Portfolios";
import Skills from "./Pages/Skills";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
              <Home />
              <Skills />
              <Portfolios />
          </Route>
          <Route path="/home">
              <Home />
              <Skills />
              <Portfolios />
              <Contact/>
          </Route>
          <Route path="/details/:id">
            <DetailsProject />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Not />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
