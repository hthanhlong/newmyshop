import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  section: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "0 24px",
    marginBottom: "2.5rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
      height: "100%",
    },
  },
  heading: {
    fontSize: "3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  title: {
    textAlign: "center",
    padding: "2rem 0",
    marginBottom: "1rem",
    fontSize: "3rem",
  },

  image: {
    position: "relative",
    padding: "30%",
    borderRadius: "10px",
  },
  imgcontent: {
    height: "10rem",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    top: "1.3rem",
    right: "1rem",
  },
  productcontent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10rem",
  },
  price: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    marginBottom: "0.5rem",
  },
  list: {
    padding: "0 10%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  ourproduct: {
    height: "100%",
    padding: "15rem 3rem",
    [theme.breakpoints.down("md")]: {
      padding: "4rem 3rem",
    },
  },
  background: {
    position: "relative",
    height: "30rem",
    borderRadius: "0.3rem",
    backgroundColor: "#FFF7D8",
    [theme.breakpoints.down("md")]: {
      height: "24rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "33rem",
    },
  },
  imagefloat: {
    position: "absolute",
    padding: "6rem",
    height: "40rem",
    top: "-30%",
    left: "15%",
    zIndex: 100,
  },
  blackbtn: {
    backgroundColor: "black",
    color: "white",
    width: "12rem",
    "&:hover": {
      transform: "translateY(-3px)",
      backgroundColor: "black",
      color: "white",
    },
    "&:hover::before": {
      display: "none",
    },
  },
  bestproductcontent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "15rem",
    marginTop: "5rem",
    marginLeft: "10%",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  imagebestproduct: {
    position: "absolute",
    padding: "4rem",
    width: "10rem",
    bottom: "-32%",
    right: "15%",
  },
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    padding: "0 10%",
    display: "flex",
    justifyContent: "flex-end",
  },

  animation: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "3px 4px 7px #cccc",
    },
  },
}));
