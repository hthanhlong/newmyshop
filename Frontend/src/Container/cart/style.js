import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  maintable: {
    margin: "1rem 0",
    padding: "0 5%",
  },
  table: {
    width: "100%",
  },
  cell: {
    height: "100%",
  },
  button: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "1rem",
  },
  removeicon: {
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
});
