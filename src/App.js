import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import firebase from "firebase/app";
import { useDataLayerValue } from "./DataLayer";

function App() {
  
  const [{} , dispatch] = useDataLayerValue();

  useEffect = (()=>{
      firebase.auth.onAuthStateChanged(authUser => {
        console.log(authUser);
        if (authUser) {
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        }
        else {
          dispatch({
            type:"SET_USER",
            user:null
          })
        }
      })
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />  
            <Checkout />
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
