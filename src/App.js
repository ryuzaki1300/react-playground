import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from './Components/TestComponent';

function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
      <Switch>
          <Route exact path="/">
            <TestComponent />
          </Route>
        </Switch>
      </header>
    </div>
  </Router>
  );
}

export default App;
