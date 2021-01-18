import React, { useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "../../Services/Validation";
import { login } from "../../ActionTypes/authAction";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const { isAuth, error } = auth;

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth, history]);

  return (
    <div className="background">
      <div className="row login">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="loginform">
            <span className="loginform__title">
              <h1>LOGIN</h1>
            </span>
            <div className="loginform__group">
              <span>
                <MailOutlineIcon />
              </span>
              <Field name="email" type="email" placeholder="Email..." />
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="error__message"
            />
            <div className="loginform__group">
              <span>
                <LockIcon />
              </span>
              <Field
                name="password"
                type="password"
                placeholder="Password..."
                autoComplete="true"
              />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="error__message"
            />
            <Box py={2}>
              {error && (
                <div className="error__message_spec">
                  <Typography color="secondary">{error}</Typography>
                </div>
              )}

              {isAuth && (
                <div className="error__message_spec">
                  <div>
                    <CircularProgress />
                  </div>
                  <Typography color="secondary">Login Success</Typography>
                </div>
              )}
            </Box>

            <Button type="submit">Login</Button>
          </Form>
        </Formik>
        <div className="logincontent">
          <h3>Or login with</h3>
          <div className="login__social">
            <div className="login__social-item">
              <span className="facebook_icon">
                <FacebookIcon />
              </span>
              <Link to="/">Facebook</Link>
            </div>
            <div className="login__social-item">
              <h2>G</h2>
              <Link to="/">Google</Link>
            </div>
          </div>
        </div>
        <div className="register__link">
          <Link to="/register">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
