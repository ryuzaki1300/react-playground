import './assets/scss/main.scss';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'Components/Sections/Header';
import Products from 'Components/Pages/Products';
import Blogs from 'Components/Pages/Blogs';
import Contact from 'Components/Pages/Contact';
import Home from 'Components/Pages/Home';
import About from 'Components/Pages/About';
import React, { useEffect } from 'react';
import useAxios from 'Hooks/useAxios';
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "config/store/index";
import { setInitialState } from 'app/global/app.reducer';

function App() {
  return (
    <Provider store={store}>

      <AppProvider>

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
      </AppProvider>
    </Provider>

  );
}
function AppProvider({ children }) {

  const { data: siteInfo, pending, error } = useAxios({
    url: "https://lavazemjanebi.com/api/system/info",
    method: 'get'
  });

  const dispatch = useDispatch();



  useEffect(()=>{
    if (siteInfo) {
      dispatch(setInitialState(siteInfo))
    }
  },[siteInfo])

  return (
    <>
      {children}
    </>
  )
}

export default App;
