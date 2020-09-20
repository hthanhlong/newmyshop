import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "20rem",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        height: "100%", // Fix IE 11 issue.
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    field: {
        width: "100%",
        height: "2.7rem",
        padding: "0 1rem",
        fontSize: "1.3rem",
        borderColor: "transparent transparent #AFA7A1 transparent",
        transition: "all 0.4s ease",
        "&:hover": {
            borderRadius: "3px",
            borderColor: "transparent transparent blue transparent",
            border: "blue solid 2px",
        },
    },
    fieldgroup: {
        marginBottom: "0.5rem",
    },
}));