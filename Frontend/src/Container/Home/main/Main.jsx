import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Divider,
  Card,
  CardActionArea,
  Badge,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import img1 from "../../../assets/categori/cat2.jpg";
import cat3 from "../../../assets/categori/cat3.jpg";
import cardshape from "../../../assets/categori/card-shape.png";
import cardman from "../../../assets/categori/card-man.png";
import MyButton from "../../../components/Styles/MyButton";
import { useStyles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../action/cartAction";
import { fetchData } from "../../../action/ ProductAction";

const Main = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
  });
  const products = useSelector((state) => state.productList);
  const productList = products.product;

  const dispatch = useDispatch();

  const handleOnchange = (e, page) => {
    setPagination({ ...pagination, page: page });
  };

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchData(pagination.page));
    };
    getData();
  }, [pagination]);

  const handleOnClick = (productId) => {
    dispatch(addToCart(productId));
  };
  const classes = useStyles();

  return (
    <>
      <Box className={classes.section}>
        <Box>
          <Grid item xs={12}>
            <Typography className={classes.title}>Shop by Category</Typography>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <CardMedia image={img1} className={classes.image}>
                <CardContent className={classes.imgcontent}>
                  <Typography>Owmen`S</Typography>
                  <Typography>Best New Deals</Typography>
                  <Typography>New Collection</Typography>
                </CardContent>
              </CardMedia>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <CardMedia image={cat3} className={classes.image}>
                <CardContent className={classes.imgcontent}>
                  <Typography>Owmen`S</Typography>
                  <Typography>Best New Deals</Typography>
                  <Typography>New Collection</Typography>
                </CardContent>
              </CardMedia>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <CardMedia image={img1} className={classes.image}>
                <CardContent className={classes.imgcontent}>
                  <Typography>Owmen`S</Typography>
                  <Typography>Best New Deals</Typography>
                  <Typography>New Collection</Typography>
                </CardContent>
              </CardMedia>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={classes.list}>
        <Box>
          <Grid container>
            <Grid item xl={6} lg={6} md={6} xs={12}>
              <Typography className={classes.heading}>
                Lastest Products
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider style={{ margin: "1rem 0" }} />
        <Box component="div" id="alo">
          <Grid container spacing={3}>
            {!productList ? (
              <div>
                <CircularProgress />
              </div>
            ) : (
              productList.map((item) => (
                <Grid item lg={3} md={6} sm={6} xs={12} key={item.id}>
                  <Card className={classes.animation}>
                    <CardActionArea>
                      <CardMedia
                        image={item.photo}
                        style={{
                          positon: "relative",
                          height: "15rem",
                        }}
                      >
                        <Badge
                          badgeContent="New"
                          color="secondary"
                          style={{
                            position: "absolute",
                            top: 30,
                            left: 50,
                          }}
                        />
                      </CardMedia>
                    </CardActionArea>
                    <CardContent className={classes.productcontent}>
                      <Typography style={{ height: "100%" }}>
                        {item.description}
                      </Typography>
                      <Box className={classes.price}>
                        <Typography style={{ fontSize: "1rem" }}>
                          $ {item.newprice}
                        </Typography>
                        <Typography
                          style={{
                            textDecoration: "line-through",
                            color: "red",
                            fontSize: "1rem",
                          }}
                        >
                          $ {item.oldprice}
                        </Typography>
                      </Box>
                      <Box>
                        <Button
                          variant="contained"
                          color="inherit"
                          onClick={() => handleOnClick(item.id)}
                        >
                          Add To Cart
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Box>
      <Box className={classes.pagination}>
        <Box className={classes.root}>
          <Pagination
            onChange={handleOnchange}
            page={pagination.page}
            count={products.totalPages}
          />
        </Box>
      </Box>
      <Box className={classes.ourproduct}>
        <Box className={classes.background}>
          <Grid container>
            <Grid item xl={5} lg={5}>
              <Box display={{ xs: "none", lg: "block" }}>
                <CardMedia image={cardman} className={classes.imagefloat} />
              </Box>
            </Grid>
            <Grid item xl={7} lg={7} md={12} sm={12} xs={12}>
              <Box className={classes.bestproductcontent}>
                <Typography style={{ fontSize: "2.3rem" }}>
                  Find The Best Product <br />
                  from Our Shop
                </Typography>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Designers who are interesten creating state ofthe.
                </Typography>
                <Typography>
                  <MyButton className={classes.blackbtn}>
                    <a
                      href="/#alo"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Shop Now
                    </a>
                  </MyButton>
                </Typography>
                <Box display={{ xs: "none", lg: "block" }}>
                  <CardMedia
                    image={cardshape}
                    className={classes.imagebestproduct}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Main;
