import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: "blue",
    color: "#fff",
    borderRadius: "25px",
    width: "7rem",
    padding: "0.5rem",
    letterSpacing: "0.1rem",
    overflow: "hidden",
    zIndex: 10,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: "#00b1ff",
      zIndex: 1,
      borderRadius: "25px",
      transition: "transform 0.5s",
      transformOrigin: "0 0",
      transitionTimingFunction: "cubic-bezier(0.5,1.6,0.4,0.7)",
      transform: "scaleX(0)",
    },
    "&:hover::before": {
      color: "#fff",
      transform: "scale(1)",
      zIndex: -1,
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: "auto",
    },
  },
});

const MyButton = (props) => {
  const { classes, children } = props;
  return (
    <Button className={classes.mybtn} {...props}>
      {children}
    </Button>
  );
};

export default withStyles(styles)(MyButton);
