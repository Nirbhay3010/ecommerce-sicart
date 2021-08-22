import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home.js";
import ProductPage from "./components/ProductPage.js";
import ShopComponent from "./components/shopPage.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/product'>
          <ProductPage></ProductPage>
        </Route>
        <Route exact path='/shop' component={ShopComponent}>
         
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
