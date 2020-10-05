import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { IconButton } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { logout } from "../../ActionTypes/authAction";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const dispatch = useDispatch();

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const auth = useSelector((state) => state.auth);

  const { isAuth } = auth;

  const listCart = useSelector((state) => state.cart.itemsList);

  const handleLogOut = async () => {
    await dispatch(logout());
    await setIsActiveMenu(!isActiveMenu);
  };

  if (isAuth === false) {
    return (
      <Paper elevation={3}>
        <div className="container-fluid header mobile__nav">
          <nav className="row header__nav">
            <div className="col-3 col-sm-1 col-md-1 col-lg-1 col-lg-1">
              <span className="header__nav_logo">
                <NavLink to="/">
                  <h1>MyShop.</h1>
                </NavLink>
              </span>
            </div>

            <li className="mobile_button d-lg-none">
              <IconButton onClick={() => setIsActiveMenu(!isActiveMenu)}>
                <MenuOutlinedIcon />
              </IconButton>
            </li>

            <div
              className={
                isActiveMenu
                  ? "nav_mobile d-sm-block d-lg-none togglemenu"
                  : "nav_mobile d-lg-none"
              }
            >
              <ul className="nav_list">
                <li>Sign in</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li
                  className="nav_close"
                  onClick={() => setIsActiveMenu(!isActiveMenu)}
                >
                  <CloseIcon />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Paper>
    );
  }

  return (
    <Paper elevation={3}>
      <div className="container-fluid header">
        <nav className="row header__nav">
          <div className="col-3 col-sm-1 col-md-1 col-lg-1 col-lg-1">
            <span className="header__nav_logo">
              <NavLink to="/">
                <h1>MyShop.</h1>
              </NavLink>
            </span>
          </div>
          <div className="d-none d-lg-block col-lg-6 col-xl-6">
            <ul className="header__nav_list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <Badge badgeContent="HOT" color="secondary">
                  <NavLink to="/category">Category</NavLink>
                </Badge>
              </li>
              <li>
                <NavLink to="/category">Latest</NavLink>
                <ul className="submenu">
                  <li>
                    <NavLink to="/category">Products List</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Products Details</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/">Pages</NavLink>
                <ul className="submenu">
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Card</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Element</NavLink>
                  </li>
                  <li>
                    <NavLink to="">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Confirmation</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Shopping Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Product Checkout</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-9 col-sm- col-md-8 col-lg-5 col-xl-5">
            <ul className="d-flex justify-content-between align-items-center header__nav_items">
              <li className="d-none d-md-block">
                <form>
                  <input
                    type="text"
                    name="Search"
                    placeholder="Search products"
                  />
                  <i>
                    <NavLink to="#">
                      <SearchOutlinedIcon />
                    </NavLink>
                  </i>
                </form>
              </li>
              <li className="header__nav_cart">
                <div className="outsizeicon">
                  <NavLink to="/cart">
                    <Badge
                      badgeContent={listCart && listCart.length}
                      color="secondary"
                    >
                      <ShoppingCartOutlinedIcon style={{ fontSize: "24px" }} />
                    </Badge>
                  </NavLink>
                </div>
              </li>
              <li className="d-none d-md-block header_nav_heart">
                <div className="outsizeicon">
                  <NavLink to="/">
                    <Badge badgeContent={2} color="secondary">
                      <FavoriteBorderOutlinedIcon
                        style={{ fontSize: "24px" }}
                      />
                    </Badge>
                  </NavLink>
                </div>
              </li>
              <li className="d-none d-lg-block header__nav_button">
                {auth.user && (
                  <div className="profile">
                    <div className="profile__title">
                      <AccountCircleIcon />
                      <ArrowDropDownIcon />
                    </div>
                    <div className="profile__title-list">
                      <ul>
                        <li>
                          <Link to="/admin">Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/admin">setting</Link>
                        </li>
                        <li>
                          <Link to="#" onClick={handleLogOut}>
                            Log out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className="mobile_button d-lg-none">
                <IconButton onClick={() => setIsActiveMenu(!isActiveMenu)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </li>
            </ul>
          </div>
          <div
            className={
              isActiveMenu
                ? "nav_mobile d-sm-none togglemenu"
                : "nav_mobile d-lg-block"
            }
          >
            <ul className="nav_list">
              <li>
                <Link to="/" onClick={() => setIsActiveMenu(!isActiveMenu)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  onClick={() => setIsActiveMenu(!isActiveMenu)}
                >
                  Category
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setIsActiveMenu(!isActiveMenu)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsActiveMenu(!isActiveMenu)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={handleLogOut}>
                  Log out
                </Link>
              </li>
              <li
                className="nav_close"
                onClick={() => setIsActiveMenu(!isActiveMenu)}
              >
                <CloseIcon />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Paper>
  );
};

export default Header;
