import React from "react";
import { Box, Typography, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bgimg from "../../../assets/hero/category.jpg";

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "20rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
}));

const Banner = (props) => {
  const { content } = props;
  const classes = useStyles();
  return (
    <Box>
      <CardMedia className={classes.banner}>
        <CardContent>
          <Typography component="div" variant="h2">
            {content}
          </Typography>
        </CardContent>
      </CardMedia>
    </Box>
  );
};

export default Banner;
