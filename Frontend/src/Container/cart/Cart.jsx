import React from "react";
import Banner from "../../components/common/banner/Banner";
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Button,
} from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./style";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../action/cartAction";

const CartPage = () => {
  const classes = useStyles();
  const productList = useSelector((state) => state.cart);

  const total = productList.reduce(
    (total, element) => total + element.newprice * element.count,
    0
  );

  const dispatch = useDispatch();
  const handleRemoveCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
  return (
    <Box>
      <Banner content="Cart" />
      <Box className={classes.maintable}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            {productList.length !== 0 && (
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>Products</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
            )}
            <TableBody>
              {productList.length === 0 ? (
                <TableCell colSpan={5} align="center">
                  <Typography variant="h5" style={{ margin: "3rem 0" }}>
                    Your cart is empty
                  </Typography>
                </TableCell>
              ) : (
                productList.map((item) => (
                  <TableRow key={item.id} className={classes.cell}>
                    <TableCell colSpan={2}>
                      <Card elevation={0} className={classes.root}>
                        <CardMedia
                          image={item.photo}
                          style={{ padding: "3rem", marginRight: "0.3rem" }}
                        />
                        <CardContent>
                          <Typography>
                            {item.description} + {item.id}
                          </Typography>
                          <Typography>
                            <DeleteOutlinedIcon
                              className={classes.removeicon}
                              onClick={() => handleRemoveCart(item.id)}
                            />
                          </Typography>
                        </CardContent>
                      </Card>
                    </TableCell>
                    <TableCell align="right">{item.newprice}</TableCell>
                    <TableCell align="right">{item.count}</TableCell>
                    <TableCell align="right">
                      {item.newprice * item.count}
                    </TableCell>
                  </TableRow>
                ))
              )}
              {productList.length !== 0 && (
                <TableRow>
                  <TableCell colSpan={2} />
                  <TableCell align="right">
                    <Typography variant="h6">Subtotal</Typography>
                  </TableCell>
                  <TableCell />
                  <TableCell align="right">
                    <Typography variant="h6">$ {total}</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {productList.length !== 0 && (
          <Box className={classes.button}>
            <Button variant="contained" color="primary">
              Proceed To Checkout
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartPage;
