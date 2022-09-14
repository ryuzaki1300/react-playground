import './assets/scss/main.scss';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Basics/Header';
import Products from './Components/Pages/Products';
import Blogs from './Components/Pages/Blogs';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

function App() {
  return (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
