import React from "react";
import { Divider, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../ActionTypes/cartAction";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const listCart = useSelector((state) => state.cart.itemsList);

  const handleDetele = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__title">
          <h1>Cart</h1>
          {listCart && <h4> ({listCart.length} products)</h4>}
        </div>

        <div className="row cart__main">
          <div className="col-12 col-lg-9 background_cartmain">
            {listCart.length === 0 ? (
              <div>Your cart is empty</div>
            ) : (
              listCart.map((item) => (
                <div key={item.id} className="cart__left">
                  <img className="cart__left-img" src={item.photo} alt="" />
                  <div className="cart__left-content">
                    <div className="cart__left-content-left">
                      <Link to={`/productdetails/${item.id}`}>
                        <h3>{item.description}</h3>
                      </Link>
                      <h4>Sold by: Tiki trading</h4>
                      <h4
                        className="cart__button"
                        onClick={() => handleDetele(item)}
                      >
                        Delete
                      </h4>
                    </div>
                    <div className="cart__left-content-right">
                      <div>
                        <h3>$ {item.newprice}</h3>
                        <div className="cart__price">
                          <h5 className="cart__price-old">$ {item.oldprice}</h5>
                          <Divider
                            orientation="vertical"
                            flexItem
                            style={{ margin: "0 1rem" }}
                          />
                          {Math.floor(
                            ((item.oldprice - item.newprice) / item.oldprice) *
                              100
                          ) > 0 && (
                            <h5>
                              {Math.floor(
                                ((item.oldprice - item.newprice) /
                                  item.oldprice) *
                                  100
                              )}
                              %
                            </h5>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="productdetails__button-qty">
                          <button> + </button>
                          <span>{item.count}</span>
                          <button> - </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="col-12 col-lg-3">
            <div className="cart__right">
              <div className="row cart__right-discount">
                <h2>Enter voucher code</h2>
                <input name="name" type="text" placeholder="Your code..." />
              </div>
              <div className="row cart__right-ordersummary">
                <div className="cart__right-ordersummary-title">
                  Order Summary
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
              <div className="productdetails__button-addtocart">
                <Link to="/payment">
                  <Button style={{ width: "100%" }}>Check out</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
