import React from "react";
import { Box, Grid, Typography, Divider } from "@material-ui/core";
import { useStyles } from "./style";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Box className={classes.column}>
            <Box>
              <Typography variant="h4" style={{ marginBottom: "1rem" }}>
                MyShop.
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Box className={classes.column}>
            <Box>
              <Typography className={classes.title}>Quick Links</Typography>
            </Box>
            <Box className={classes.content}>
              <Typography className={classes.link}>About</Typography>
              <Typography className={classes.link}>
                Offers & Discounts
              </Typography>
              <Typography className={classes.link}>Get Coupon</Typography>
              <Typography className={classes.link}>Contact Us</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Box className={classes.column}>
            <Box>
              <Typography className={classes.title}>New Products</Typography>
            </Box>
            <Box className={classes.content}>
              <Typography className={classes.link}>About</Typography>
              <Typography className={classes.link}>
                Offers & Discounts
              </Typography>
              <Typography className={classes.link}>Get Coupon</Typography>
              <Typography className={classes.link}>Contact Us</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Box className={classes.column}>
            <Box>
              <Typography className={classes.title}>Support</Typography>
            </Box>
            <Box className={classes.content}>
              <Typography className={classes.link}>About</Typography>
              <Typography className={classes.link}>
                Offers & Discounts
              </Typography>
              <Typography className={classes.link}>Get Coupon</Typography>
              <Typography className={classes.link}>Contact Us</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider style={{ margin: "2rem 0" }} />
      <Box className={classes.copyright}>
        <Grid>
          <Typography>
            Copyright © 2020 All rights reserved ! This web was clone by Thanh
            Long
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
