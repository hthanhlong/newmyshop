import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogin } from "../../action/authAciton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";

export default function Login(props) {
  const { history } = props;

  const classes = useStyles();

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const logIninfo = useSelector((state) => state.auth);

  const { isAuth, error } = logIninfo;

  const validated = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const handleOnSubmit = (values) => {
    if (values) {
      dispatch(authLogin(values));
    }
  };

  if (isAuth) {
    history.push("/");
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ height: "100%", paddingTop: "4rem", marginBottom: "14rem" }}
    >
      <div className={classes.paper}>
        <Typography
          component="h1"
          variant="h5"
          style={{ marginBottom: "2rem" }}
        >
          LOG IN
        </Typography>
        <Formik
          initialValues={userInput}
          validate={validated}
          onSubmit={handleOnSubmit}
        >
          <Form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className={classes.fieldgroup}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="ID: admin@gmail.com"
                    autoComplete="email"
                    className={classes.field}
                  />
                  <Box>
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{
                        color: "red",
                        marginTop: "0.3rem",
                        fontSize: "0.8rem",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Pws: 123456"
                    autoComplete="current-password"
                    className={classes.field}
                  />
                  <Box>
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{
                        color: "red",
                        marginTop: "0.3rem",
                        fontSize: "0.8rem",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {error ? (
                  <Typography
                    style={{
                      color: "red",
                      marginTop: "0.3rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    {error}
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
            <Box style={{ width: "100%" }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ width: "100%", marginBottom: "0.5rem" }}
              >
                Log in
              </Button>
              <Typography>
                <Link
                  to="/signin"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Don't have an account? register
                </Link>
              </Typography>
            </Box>
          </Form>
        </Formik>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
