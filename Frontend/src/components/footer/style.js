import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "1.5rem 5%",
    height: "100%",
    backgroundColor: "#F0F0F0",
  },
  column: {
    display: "flex",
    height: "11rem",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.3rem",
    marginBottom: "1rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  link: {
    transition: "all 0.2s ease",
    cursor: "pointer",

    padding: "0.3rem",
    "&:hover": {
      transform: "translateX(3px)",
      color: "red",
    },
  },
  copyright: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));
