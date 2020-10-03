import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterSchema } from "../../Services/Validation";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../ActionTypes/authAction";

const Register = (props) => {
  const { history } = props;
  const User = {
    name: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const { errorRegister, data } = auth;

  const handleOnSubmit = (values) => {
    dispatch(register(values));
  };

  useEffect(() => {
    if (data) {
      history.push("/login");
    }
  }, [data, history]);

  return (
    <div className="background__register">
      <div className="row register">
        <Formik
          initialValues={User}
          validationSchema={RegisterSchema}
          onSubmit={handleOnSubmit}
        >
          <Form className="loginform">
            <span className="registerform__title">
              <h1>REGISTRATION FORM</h1>
            </span>
            <div className="loginform__group">
              <span>
                <AccountBoxIcon />
              </span>
              <Field name="name" type="text" placeholder="Name..." />
            </div>
            <ErrorMessage
              name="name"
              component="div"
              className="error__message"
            />
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
            {errorRegister && (
              <div className="error__message_special">{errorRegister}</div>
            )}
            <div className="register__button">
              <Button type="submit">Register</Button>
            </div>
          </Form>
        </Formik>
        <div className="login__link">
          <Link to="/login">Already have an account? Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
