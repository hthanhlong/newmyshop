import React from "react";
import { Divider, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../ActionTypes/cartAction";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterSchema } from "../../Services/Validation";

const Payment = () => {
  const dispatch = useDispatch();
  const User = {
    name: "",
    email: "",
    password: "",
  };

  const listCart = useSelector((state) => state.cart.itemsList);

  const handleDetele = (product) => {
    dispatch(removeFromCart(product));
  };

  const handlePayment = (value) => {
    console.log(value);
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="row payment__main">
          <div className="col-12 col-lg-9 background_payment">
            <Formik
              initialValues={User}
              validationSchema={RegisterSchema}
              onSubmit={handlePayment}
            >
              <Form className="payment__form">
                <span className="payment__form_title">
                  <h1>PAYMENT FORM</h1>
                </span>
                <div className="row payment__form_content">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 loginform__group payment_group">
                    <Field
                      name="firstname"
                      type="text"
                      placeholder="Your First Name..."
                    />
                    <ErrorMessage name="firstname" component="div" />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 loginform__group payment_group">
                    <Field
                      name="lastname"
                      type="text"
                      placeholder="Your Last Name..."
                    />
                    <ErrorMessage name="lastname" component="div" />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 loginform__group payment_group">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Your Email..."
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 loginform__group payment_group">
                    <Field
                      name="phonenumber"
                      type="text"
                      placeholder="Your Phone Number..."
                    />
                    <ErrorMessage name="phonenumber" component="div" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 loginform__group payment_group">
                    <Field
                      name="address"
                      type="text"
                      placeholder="Your Address..."
                    />
                    <ErrorMessage name="address" component="div" />
                  </div>
                  <div className="productdetails__button-addtocart payment_button">
                    <Button type="submit" style={{ width: "100%" }}>
                      Payment
                    </Button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="col-12 col-lg-3">
            <div className="cart__right">
              <div className="row cart__right-ordersummary payment_ordersummary">
                <div className="cart__right-ordersummary-title">Your cart</div>
                <div className="list__item">
                  <ul>
                    {listCart &&
                      listCart.map((item) => (
                        <div key={item.id} className="payment__left">
                          <img
                            className="payment__left-img"
                            src={item.photo}
                            alt=""
                          />
                          <div className="payment__left-content">
                            <div className="cart__left-content-left">
                              <Link to={`/productdetails/${item.id}`}>
                                <h5>{item.description}</h5>
                              </Link>
                            </div>
                            <div className="cart__left-content-right">
                              <h5>$ {item.newprice}</h5>
                            </div>
                            <div className="productdetails__button-qty">
                              <h5>x{item.count}</h5>
                            </div>
                          </div>
                        </div>
                      ))}
                  </ul>
                </div>
                <div className="cart__right-ordersummary-price">
                  <span>Subtotal:</span>
                  <h3>
                    ${" "}
                    {listCart.reduce(
                      (total, element) =>
                        total + element.count * element.newprice,
                      0
                    )}
                  </h3>
                </div>
                <Divider />
                <div className="cart__right-ordersummary-price">
                  <span>Order Total:</span>
                  <h2>
                    ${" "}
                    {listCart.reduce(
                      (total, element) =>
                        total + element.count * element.newprice,
                      0
                    )}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
