import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "#c7ecfd",
    Height: "47rem",
    overflow: "hidden",
    zIndex: -100,
  },
  media: {
    padding: "50%",
    marginTop: "5rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    padding: "10rem 0 10rem 3rem",
    animation: "$myEffect 1s ease-in",
  },

  title: {
    fontSize: " 5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(500px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
