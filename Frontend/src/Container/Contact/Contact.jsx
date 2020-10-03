import React from "react";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contact__background">
      <div className="row contact__content">
        <div className="col-lg-6 contact__content-left ">
          <div className="d-none d-lg-block">
            <div className="contact__content_img">
              <img src="/assets/img/img-01.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6  contact__content-right">
          <div className="contact__content-form">
            <div className="loginform">
              <span className="registerform__title">
                <h1 className="contact__title">Contact Us</h1>
              </span>
              <div className="loginform__group">
                <input name="name" type="text" placeholder="Name..." />
              </div>
              <div className="loginform__group">
                <input name="email" type="email" placeholder="Email..." />
              </div>
              <div className="loginform__group">
                <textarea
                  className="contact__textarea"
                  placeholder="message..."
                />
              </div>
              <div className="contact__button">
                <Button type="submit">Send me</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
