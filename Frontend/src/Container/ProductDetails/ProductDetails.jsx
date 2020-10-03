import React, { useState, useEffect } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { Link } from "react-router-dom";
import { Button, CircularProgress, Divider } from "@material-ui/core";
import Slider from "react-slick";
import Axios from "axios";
import { API_ROOT } from "../../Api/configAxios";
import { Alert } from "@material-ui/lab";
import { addToCart } from "../../ActionTypes/cartAction";
import { useDispatch } from "react-redux";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const [product, setProduct] = useState({});

  const [qty, setQty] = useState(1);

  const save = Math.floor(
    ((product.oldprice - product.newprice) / product.oldprice) * 100
  );
  useEffect(() => {
    const getProduct = async () => {
      await Axios.get(`${API_ROOT}/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => console.log(err));
    };
    getProduct();
  }, [id]);

  const handleUpQty = () => {
    if (qty === 10) return;
    setQty(qty + 1);
  };

  const handleDownQty = () => {
    if (qty === 1) return;
    setQty(qty - 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const dispatch = useDispatch();
  const handleOnAddToCart = (product) => {
    dispatch(addToCart(product, qty));
  };

  if (!product)
    return (
      <div className="lazyload">
        <CircularProgress />
      </div>
    );

  return (
    <div className="productdetails__background">
      <div className="container">
        <div className="row productdetails">
          <div className="col-lg-1 sub_menu">
            <div className="sub_img">
              <img src={product.photo} alt="" />
              <img src={product.photo} alt="" />
              <img src={product.photo} alt="" />
              <img src={product.photo} alt="" />
              <img src={product.photo} alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="main__img">
              <img src={product.photo} alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row productdetails__content">
              <h2>{product.description}</h2>
              <div className="productdetails_stars">
                <ul>
                  <li className="product1__star">
                    <StarIcon />
                  </li>
                  <li className="product1__star">
                    <StarIcon />
                  </li>
                  <li className="product1__star">
                    <StarIcon />
                  </li>
                  <li className="product1__star">
                    <StarIcon />
                  </li>
                  <li className="product1__star">
                    <StarHalfIcon />
                  </li>
                  <li>
                    <span>
                      <Link to="">
                        <h5 className="productdetails__vote">
                          (16 answered questions)
                        </h5>
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <span className="productdetails__bestseller">
                  #1 Best Seller
                </span>
              </div>
            </div>
            <div className="divider">
              <Divider />
            </div>
            <div className="row">
              <div className="productdetails__main">
                <h2>Price: $ {product.newprice}</h2>
                {save > 0 && <h5>Save: {save}% </h5>}
                <h6>(${product.oldprice})</h6>
                <ul>
                  <li>
                    100% Cotton; Granite Heather: 60% Cotton, 40% Polyester;
                    Oxford Grey: 90% Cotton, 10% Polyester
                  </li>
                  <li>Machine Wash</li>
                  <li>
                    Lightweight, comfortable cotton jersey fabric. Handy side
                    pockets
                  </li>
                  <li>Athletic fit for comfort</li>
                  <li>Relaxed elastic bottom band</li>
                  <li>Side pockets for storage</li>
                </ul>
                <div className="productdetails__button">
                  <div className="productdetails__button-qty">
                    <h5>Quantity:</h5>
                    <button onClick={handleDownQty}> - </button>
                    <span>{qty}</span>
                    <button onClick={handleUpQty}> + </button>
                  </div>
                  <div className="productdetails__button-addtocart">
                    <Button
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => handleOnAddToCart(product)}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row relatedview">
          <h2>Customers who viewed this item also viewed</h2>
          <div>
            <Slider {...settings}>
              <div>
                <ul>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                  <li className="relatedview__item">
                    <div>
                      <img src="/assets/img/categori/product1.png" alt="" />
                      <h3>Champion Men's Closed</h3>
                      <span>Price: $ 80</span>
                      <div>
                        <h4>Sales off: 20%</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div
                className="modal-body"
                data-dismiss="modal"
                aria-label="Close"
              >
                <Alert severity="success">
                  <h2>Your Product was added to cart</h2>
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
