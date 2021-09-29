import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import NavLinks  from './components/NavLinks';
import {auth} from './firebase-config';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react'

function App() {

  const [{loggedinuser}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if(userauth) {
        dispatch({
          type: "SET_LOGIN",
          user: userauth
        })
      }else {
        dispatch({
          type: "SET_LOGIN",
          user: null
        })
      }
    })
    
    return () => {
      unsubscribe();
    }
  }, [])

  console.log("user",loggedinuser)

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <NavLinks />
          <Home />
          <Footer />
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
