import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";

const Product = (props) => {
  const { item } = props;

  return (
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
            <Link to={`/productdetails/${item.id}`}>{item.description}</Link>
          </h2>
        </li>
        <li className="product__price">
          <span className="product__price_new">${item.newprice}</span>
          <span className="product__price_old">${item.oldprice}</span>
        </li>
      </ul>
    </div>
  );
};

export default Product;
