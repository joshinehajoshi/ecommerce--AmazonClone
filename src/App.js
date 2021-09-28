import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import NavLinks  from './components/NavLinks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
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
