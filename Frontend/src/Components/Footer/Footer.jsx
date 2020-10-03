import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row footer_area">
        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
          <div className="footer-logo">
            <Link to="index.html">
              <img src="assets/img/logo/logo2_footer.png" alt="" />
            </Link>
          </div>
          <div className="footer-title">
            <div className="footer-pera">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5 footer_item">
          <div className="footer-title">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#"> Offers & Discounts</Link>
              </li>
              <li>
                <Link to="#"> Get Coupon</Link>
              </li>
              <li>
                <Link to="#"> Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7 footer_item">
          <div className="single-footer-caption mb-50">
            <div className="footer-title">
              <h4>New Products</h4>
              <ul>
                <li>
                  <Link to="#">Woman Cloth</Link>
                </li>
                <li>
                  <Link to="#">Fashion Accessories</Link>
                </li>
                <li>
                  <Link to="#"> Man Accessories</Link>
                </li>
                <li>
                  <Link to="#"> Rubber made Toys</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7 footer_item">
          <div className="footer-title">
            <h4>Support</h4>
            <ul>
              <li>
                <Link to="#">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Report a Payment Issue</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
