import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./components/movies";
import NavBar from "./vidlyfiles/navbar";
import { Route, Switch } from "react-router-dom";
import Products from "./vidlyfiles/products";
import Posts from "./vidlyfiles/post";
import Home from "./vidlyfiles/home";
import Dashboard from "./vidlyfiles/dashboard";
import Productdetails from "./vidlyfiles/productdetail";
import Movieid from "./vidlyfiles/moviedfakeid";
import Loginform from "./Forms/loginform";
import Registerform from "./vidlyfiles/Registerfrom";
import Movieform from "./Forms/movieform";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/products/:id" component={Productdetails} />
          <Route path="/products" component={Products}></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/admin" component={Dashboard}></Route>
          <Route path="/movies/:id" component={Movieform}></Route>
          <Route path="/movies/:_id" component={Movieid} />
          <Route path="/login" component={Loginform}></Route>
          <Route path="/Register" component={Registerform} />
          <Route path="/" component={Movies}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
