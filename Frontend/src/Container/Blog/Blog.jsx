import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Button, Divider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const Blog = () => {
  return (
    <div className="container blog">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog__post">
            <img src="assets/img/blog/single_blog_1.png" alt="" />
            <div className="blog__content">
              <h1 className="blog__content_title">
                <Link to="/">Google inks pact for new 35-storey office</Link>
              </h1>
              <p className="blog__content_description">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="blog__content_action">
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <PersonIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    Travel, Lifestyle
                  </div>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <QuestionAnswerIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    03 Comments
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__post">
            <img src="assets/img/blog/single_blog_2.png" alt="" />
            <div className="blog__content">
              <h1 className="blog__content_title">
                <Link to="/">Google inks pact for new 35-storey office</Link>
              </h1>
              <p className="blog__content_description">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="blog__content_action">
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <PersonIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    Travel, Lifestyle
                  </div>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <QuestionAnswerIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    03 Comments
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__post">
            <img src="assets/img/blog/single_blog_3.png" alt="" />
            <div className="blog__content">
              <h1 className="blog__content_title">
                <Link to="/">Google inks pact for new 35-storey office</Link>
              </h1>
              <p className="blog__content_description">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="blog__content_action">
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <PersonIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    Travel, Lifestyle
                  </div>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <QuestionAnswerIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    03 Comments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right__side">
            <aside className="right__side-one">
              <div>
                <input name="name" type="text" placeholder="Search..." />
              </div>
              <Button>Search</Button>
            </aside>

            <aside className="right__side-two">
              <div className="right__side-two-title">
                <h1>Category</h1>
              </div>
              <div className="right__side-two-list">
                <ul>
                  <li>
                    <Link to="/blog">Resaurant food (37)</Link>
                  </li>
                  <li>
                    <Link to="/blog">Travel news (10)</Link>
                  </li>
                  <li>
                    <Link to="/">Modern Technology (03)</Link>
                  </li>
                  <li>
                    <Link to="/">Product (12)</Link>
                  </li>
                  <li>
                    <Link to="/">Inspiration (21)</Link>
                  </li>
                  <li>
                    <Link to="/">Healthy Care (15)</Link>
                  </li>
                </ul>
              </div>
            </aside>
            <aside className="right__side-three">
              <div className="right__side-three-title">
                <h1>Recent</h1>
              </div>
              <div className="right__side-three-list">
                <ul>
                  <li>
                    <img src="assets/img/post/post_1.png" alt="" />
                    <div className="right__side-three-list-content">
                      <Link to="/blog">From life was you fish...</Link>
                      <span>August 20, 2020</span>
                    </div>
                  </li>
                  <li>
                    <img src="assets/img/post/post_2.png" alt="" />
                    <div className="right__side-three-list-content">
                      <Link to="/blog">The Amazing Hubble</Link>
                      <span>02 Hours</span>
                    </div>
                  </li>
                  <li>
                    <img src="assets/img/post/post_3.png" alt="" />
                    <div className="right__side-three-list-content">
                      <Link to="/blog">Astronomy Or Astrology</Link>
                      <span>05 Hours</span>
                    </div>
                  </li>
                  <li>
                    <img src="assets/img/post/post_4.png" alt="" />
                    <div className="right__side-three-list-content">
                      <Link to="/blog">Asteroids telescope</Link>
                      <span>07 Hours</span>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
            <aside className="right__side-four">
              <div className="right__side-four-title">
                <h1>Tags</h1>
              </div>
              <div className="right__side-four-list">
                <ul>
                  <li>
                    <Link to="/blog">Project</Link>
                  </li>
                  <li>
                    <Link to="/blog">Love</Link>
                  </li>
                  <li>
                    <Link to="/blog">Travel</Link>
                  </li>
                  <li>
                    <Link to="/blog">Restaurant</Link>
                  </li>
                  <li>
                    <Link to="/blog">Lifestyle</Link>
                  </li>
                  <li>
                    <Link to="/blog">Desgin</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 pagination">
          <Pagination
            count={3}
            variant="outlined"
            shape="rounded"
            className="test"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
