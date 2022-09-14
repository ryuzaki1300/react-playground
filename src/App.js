import './assets/scss/main.scss';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from './Components/TestComponent';
import Header from './Components/Basics/Header';

function App() {
  return (
  <Router>
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/">
            <TestComponent />
          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
