import React, { Suspense, lazy } from "react";
import "./app.css";
import Header from "./Components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import PrivateRouter from "./Services/PrivateRouter";
import CircularProgress from "@material-ui/core/CircularProgress";
import ScrollToTop from "./Components/ScolltoTop";

const Payment = lazy(() => import("./Container/Payment/Payment"));
const Blog = lazy(() => import("./Container/Blog/Blog"));
const Register = lazy(() => import("./Container/Register/Register"));
const Category = lazy(() => import("./Container/Category/Category"));
const Cart = lazy(() => import("./Container/Cart/Cart"));
const Contact = lazy(() => import("./Container/Contact/Contact"));
const Admin = lazy(() => import("./Container/AdminPages/Admin/Admin"));
const ProductDetails = lazy(() =>
  import("./Container/ProductDetails/ProductDetails")
);
const Home = lazy(() => import("./Container/Home/Home"));
const Login = lazy(() => import("./Container/Login/Login"));

function App() {
  return (
    <>
      <div className="app">
        <CssBaseline />
        <Suspense
          fallback={
            <div className="lazyload">
              <CircularProgress />
            </div>
          }
        >
          <Header />
          <ScrollToTop />
          <Switch>
            <PrivateRouter exact path="/" component={Home} />
            <PrivateRouter exact path="/blog" component={Blog} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRouter exact path="/category" component={Category} />
            <PrivateRouter exact path="/cart" component={Cart} />
            <PrivateRouter exact path="/contact" component={Contact} />
            <PrivateRouter
              exact
              path="/productdetails/:id"
              component={ProductDetails}
            />
            <PrivateRouter exact path="/payment" component={Payment} />
            <PrivateRouter exact path="/admin" component={Admin} />
          </Switch>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
