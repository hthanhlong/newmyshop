import React, { useEffect, useState } from "react";
import { Badge, Button, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import RedeemIcon from "@material-ui/icons/Redeem";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import Axios from "axios";
import { API_ROOT } from "../../Api/configAxios";

const Home = () => {
  const [lastesProducts, setLastesProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await Axios.get(`${API_ROOT}/products/?page=1&limit=8`)
        .then((res) => {
          setLastesProducts(res.data.result);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <section className="row home">
        <div className="home__background">
          <div className="home__content d-flex justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="d-none d-lg-block home__img">
                <img alt="" src="/assets/img/hero/hero_man.png" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="home__text">
                <p className="text_discount">60% Discount</p>
                <h1>
                  Winter <br />
                  Collection
                </h1>
                <h3>Best Cloth Collection by 2020!</h3>
                <Link to="/">
                  <Button variant="contained" color="primary">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="category">
              <div className="category__title">
                <h1 className="col-12">Shop by Category</h1>
              </div>
              <div className="row category__content">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <div className="category__content_card">
                    <img
                      alt=""
                      className="card_img"
                      src="/assets/img/categori/cat1.jpg"
                    />
                    <div className="card_text">
                      <h2>Owmen'S</h2>
                      <Link to="/">
                        <div>Best New Deals</div>
                      </Link>
                      <span>New Collection</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <div className="category__content_card">
                    <img
                      alt=""
                      className="card_img"
                      src="assets/img/categori/cat2.jpg"
                    />
                    <div className="card_text">
                      <h2>Winter</h2>

                      <Link to="/">
                        <div>Best New Deals </div>
                      </Link>
                      <span>New Collection</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <div className="category__content_card">
                    <img
                      className="card_img"
                      alt=""
                      src="/assets/img/categori/cat3.jpg"
                    />
                    <div className="card_text">
                      <h2>Man'S</h2>
                      <Link to="/">
                        <div>Best New Deals </div>
                      </Link>
                      <span>New Collection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="products">
          <div className="row products__title">
            <h1>Products Lastest</h1>
          </div>
          <Divider />
          <div className="row products__lists">
            {!lastesProducts ? (
              <div>...Loading</div>
            ) : (
              lastesProducts.map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"
                >
                  <div className="product">
                    <div className="product__img">
                      <Badge color="secondary" badgeContent="NEW">
                        <Link to={`/productdetails/${item.id}`}>
                          <img src={item.photo} alt="" />
                        </Link>
                      </Badge>
                    </div>
                    <ul className="product__content">
                      <li className="product__star">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                      </li>
                      <li className="product__title">
                        <h2>
                          <Link to={`/productdetails/${item.id}`}>
                            {item.description}
                          </Link>
                        </h2>
                      </li>
                      <li className="product__price">
                        <span className="product__price_new">
                          ${item.newprice}
                        </span>
                        <span className="product__price_old">
                          ${item.oldprice}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <section className="container">
        <div className="bestproduct__background">
          <div className="row">
            <div className="d-none d-lg-block col-lg-5 col-xl-5">
              <div className="bestproduct_img">
                <img alt="" src="assets/img/categori/card-man.png" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
              <div className="bestproduct_content">
                <h1>Find The Best Product from Our Shop</h1>
                <p>Designers who are interesten creating state ofthe.</p>
                <div>
                  <Button>Shop Now</Button>
                </div>
                <div className="bestproduct_icon d-none d-lg-block">
                  <img alt="" src="assets/img/categori/card-shape.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="bestcollection__background">
          <div className="row">
            <div className="d-none d-lg-block col-lg-5 col-xl-5">
              <div className="bestcollection__title">
                <div className="bestcollection__title_one">
                  <h1>
                    Best Collection <br /> of This Month
                  </h1>
                  <p>Designers who are interesten crea.</p>
                  <span>
                    <Button variant="contained" color="secondary">
                      Shop Now
                    </Button>
                  </span>
                </div>
                <img alt="" src="assets/img/collection/collection1.png" />
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
              <div className="bestcollection__img">
                <img alt="" src="assets/img/collection/collection2.png" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
              <div className="bestcollection__category">
                <div className="bestcollection__category_title">
                  <h2>Menz Winter Jacket</h2>
                </div>
                <img
                  alt=""
                  src="assets/img/collection/collection3.png"
                  className="bestcollection__category_img"
                />
              </div>
              <div className="bestcollection__category">
                <div className="bestcollection__category_title two">
                  <h2>Menz Winter Jacket</h2>
                </div>
                <img
                  alt=""
                  src="assets/img/collection/collection4.png"
                  className="bestcollection__category_img"
                />
              </div>
              <div className="bestcollection__category">
                <div className="bestcollection__category_title">
                  <h2>Menz Winter Jacket</h2>
                </div>
                <img
                  alt=""
                  src="assets/img/collection/collection5.png"
                  className="bestcollection__category_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row lastestoffer">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="lastestoffer__title">
              <h1>
                Get Our <br /> Latest Offers News
              </h1>
              <p>Subscribe news latter</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="lastestoffer__text">
              <input name="name" type="text" placeholder="Get your email" />
              <Button variant="contained" color="primary">
                Get your email
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row promotion">
          <div className="col-12 col-sm-6 col-6 col-lg-4 col-xl-4">
            <div className="promotion__content">
              <span className="promotion__content_icon">
                <RedeemIcon fontSize="large" />
              </span>
              <div className="promotion__content_title">
                <h1>Free Shipping Method</h1>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-6 col-lg-4 col-xl-4">
            <div className="promotion__content">
              <span className="promotion__content_icon">
                <LockOpenIcon fontSize="large" />
              </span>
              <div className="promotion__content_title">
                <h1>Free Shipping Method</h1>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-6 col-lg-4 col-xl-4">
            <div className="promotion__content">
              <span className="promotion__content_icon">
                <AutorenewIcon fontSize="large" />
              </span>
              <div className="promotion__content_title">
                <h1>Free Shipping Method</h1>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
