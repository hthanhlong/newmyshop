import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  content: {
    height: "5rem",
    alignItems: "center",
  },
  appbar: {
    backgroundColor: "#fff",
    color: "black",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    // position: "fixed",
    zIndex: 99,
  },

  list: {
    display: "flex",
    paddingLeft: "15rem",
    paddingRight: "2rem",
  },
  listitem: {
    cursor: "pointer",
    textDecoration: "none",
    color: "#5A418B",
    "&:visited": {
      color: "black",
    },
    "&:hover": {
      color: "red",
    },
  },
  search: {
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    alignItem: "center",
  },

  note: {
    position: "absolute",
    top: 7,
    right: 15,
  },
  menu: {
    width: "7rem",
    borderTopColor: "red",
    borderTopStyle: "solid",
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  logo: {
    color: "black",
    textDecoration: "none",
    fontSize: "2rem",
  },
  formiknew: {
    display: "flex",
    alignItems: "center",
    border: " 1px solid #F0F0F0",
    borderRadius: "5px",
    width: "100%",
    paddingLeft: "0.5rem",
    marginRight: "0.6rem",
  },
  inputField: {
    border: "none",
    outlineStyle: "none",
  },
}));
