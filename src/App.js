import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDataLayerValue } from "./DataLayer";
import firebase from 'firebase/app'
import Payment from "./components/Payment/Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from "./components/Orders/Orders";

const stripePromise = loadStripe('pk_test_51Hs9VnI11fl0uqZFoJnAGDKaaS44T026c46zIIgKigrlYq8QaNkbi1C2VvYXMAz6HkgjjAnJ5lySM341iO7Iba0F00kGItFgtR');

function App() {
  
  const [{} , dispatch] = useDataLayerValue();

  useEffect(() => {
  
    firebase.auth().onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/orders">
        <Header />  
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />  
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header /> 
            <Elements stripe={stripePromise}><Payment/></Elements>  
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
