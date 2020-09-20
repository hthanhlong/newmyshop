import React from "react";
import { Box, Grid, CardMedia, Typography } from "@material-ui/core";
import heroimg from "../../assets/hero/hero_man.png";
import MyButton from "../Styles/MyButton";
import { useStyles } from "./styleshero";

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Grid container>
        <Grid item xl={6} lg={6} md={6}>
          <Box display={{ xs: "none", sm: "block" }}>
            <CardMedia className={classes.media} image={heroimg} />
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={6} xs={12}>
          <Box className={classes.content}>
            <Typography
              style={{ fontFamily: "'Yellowtail', cursive", color: "blue" }}
              variant="h2"
            >
              60% Discount
            </Typography>
            <Typography className={classes.title}>
              Winter <br /> Collection
            </Typography>
            <Typography style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>
              Best Cloth Collection By 2020!
            </Typography>
            <Typography>
              <MyButton style={{ width: "10rem" }}>
                <a
                  href="/#alo"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Shop Now
                </a>
              </MyButton>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
