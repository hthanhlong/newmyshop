import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegister } from "../../action/authAciton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useStyles } from "../login/styles";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Register() {
  const classes = useStyles();
  let history = useHistory();

  const registerInfo = useSelector((state) => state.register);

  const { error } = registerInfo;
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

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

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  };

  const handleOnSubmit = (values) => {
    dispatch(authRegister(values));
    history.push("/login");
  };

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
          REGISTER
        </Typography>
        <Formik
          initialValues={userRegister}
          validate={validated}
          onSubmit={handleOnSubmit}
        >
          <Form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className={classes.fieldgroup}>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="name"
                    className={classes.field}
                  />
                  <Box>
                    <ErrorMessage
                      name="name"
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
                <Box className={classes.fieldgroup}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
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
                    placeholder="Password"
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
                      margin: "0.5rem 0",
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
                style={{
                  width: "100%",
                  marginBottom: "0.5rem",
                  marginTop: "2rem",
                }}
              >
                Register
              </Button>
              <Typography>
                <Link
                  to="/login"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Already have an account? log in
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
