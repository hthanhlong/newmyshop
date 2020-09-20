import React, { lazy, Suspense } from "react";
import Header from "./components/header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/footer/Footer";
import { Switch, Route } from "react-router-dom";
import CartPage from "./Container/cart/Cart";
import Lastest from "./Container/lastest/Lastest";
import Page from "./Container/page/Page";
import Contact from "./Container/contact/Contact";
import Register from "./Container/signin/Register";
import Login from "./Container/login/login";
import PrivateRoute from "./router/PrivateRoute";
import Category from "./Container/category/Categori";
import CircularProgress from "@material-ui/core/CircularProgress";
import NotFound from "./Container/NotFound404/NotFound";

const Home = lazy(() => import("./Container/Home/Home"));

function App(props) {
  return (
    <div>
      <CssBaseline />
      <Suspense fallback={<CircularProgress />}>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/lastest" component={Lastest} />
          <PrivateRoute path="/categori" component={Category} />
          <PrivateRoute path="/pages" component={Page} />
          <PrivateRoute path="/contact" component={Contact} />
          <PrivateRoute path="/cart" component={CartPage} />
          <Route path="/signin" component={Register} />
          <Route path="/login" component={Login} />
          <Route patt="*" component={NotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
