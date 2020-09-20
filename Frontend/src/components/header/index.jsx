import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import MyButton from "../Styles/MyButton";
import {
  Grid,
  ListItemText,
  ListItem,
  List,
  Input,
  Box,
  Button,
  Menu,
  IconButton,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Badge from "@material-ui/core/Badge";
import { useStyles } from "./styleheader";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import { authLogout } from "../../action/authAciton";
import "./style.css";
import ScrollTop from "../common/SrollTop";
import { Fab, Toolbar } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { searchField } from "../../action/ ProductAction";

export default function Header() {
  const productLenght = useSelector((state) => state.cart);
  const userInfo = useSelector((state) => state.auth);
  const [search, setSearch] = useState({});
  const dataList = [
    {
      name: "Pant",
    },
    {
      name: "T-Shirt",
    },
    {
      name: "Dress",
    },
  ];

  const dispatch = useDispatch();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = async () => {
    await dispatch(authLogout());
    window.location = "/login";
  };

  const searchTermSchema = Yup.object().shape({
    search: Yup.string().required(),
  });

  const handleOnSubmit = (value) => {
    dispatch(searchField(value));
  };

  return (
    <div>
      <Grid container className={classes.content}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Grid item lg={1} md={1} sm={1} xs={3}>
              <Typography variant="h6">
                <NavLink className={classes.logo} exact to="/">
                  MyShop
                </NavLink>
              </Typography>
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={5}>
              <Box display={{ xs: "none", sm: "none", lg: "block" }}>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemText>
                      <NavLink
                        activeStyle={{
                          color: "red",
                        }}
                        className={classes.listitem}
                        exact
                        to="/"
                      >
                        Home
                      </NavLink>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <NavLink
                        activeStyle={{
                          color: "red",
                        }}
                        exact
                        to="/categori"
                        className={classes.listitem}
                      >
                        <div className="headerabc">Category</div>
                      </NavLink>
                      <ul className="headerabc_menu">
                        <li>a</li>
                        <li>a</li>
                      </ul>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <NavLink
                        activeStyle={{
                          color: "red",
                        }}
                        className={classes.listitem}
                        exact
                        to="/lastest"
                      >
                        Lastest
                      </NavLink>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <NavLink
                        activeStyle={{
                          color: "red",
                        }}
                        className={classes.listitem}
                        exact
                        to="/pages"
                      >
                        Pages
                      </NavLink>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <NavLink
                        activeStyle={{
                          color: "red",
                        }}
                        className={classes.listitem}
                        exact
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item lg={4} md={7} sm={7} xs={4}>
              <Box className={classes.search}>
                <Box
                  display={{ xs: "none", sm: "none", md: "block" }}
                  style={{ display: "flex" }}
                >
                  <Formik
                    initialValues={search}
                    validationSchema={searchTermSchema}
                    onSubmit={handleOnSubmit}
                  >
                    <Box display={{ xs: "none", sm: "none", md: "block" }}>
                      <Form className={classes.formiknew}>
                        <Field
                          type="text"
                          name="search"
                          placeholder="search..."
                          className={classes.inputField}
                        />
                        <Button type="submit">
                          <SearchOutlinedIcon color="secondary" />
                        </Button>
                      </Form>
                    </Box>
                  </Formik>
                  <Box display={{ xs: "none", sm: "none", md: "block" }}>
                    <NavLink to="/cart">
                      <Badge
                        badgeContent={productLenght.length}
                        color="secondary"
                      >
                        <ShoppingCartOutlinedIcon
                          style={{
                            fontSize: "2.5rem",
                            marginLeft: "1.4rem",
                          }}
                        />
                      </Badge>
                    </NavLink>
                  </Box>
                </Box>
                <Box>
                  {userInfo.isAuth ? (
                    <Box>
                      <Button
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        onMouseOver={handleClick}
                      >
                        {userInfo.user.name}
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}
                        style={{ top: 62, left: -5 }}
                      >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                      </Menu>
                    </Box>
                  ) : (
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <MyButton style={{ width: "8rem", height: "100%" }}>
                        Log in
                      </MyButton>
                    </Link>
                  )}
                </Box>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
      </Grid>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
