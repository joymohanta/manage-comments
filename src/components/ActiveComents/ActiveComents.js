import React from "react";
import "./ActiveComents.css";
import { SearchIcon } from "@heroicons/react/solid";
import Accordion from "react-bootstrap/Accordion";
import LoadComments from "./LoadComments";

const ActiveComents = () => {
  return (
    <div className="container">
      <h2>This is active coments</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h6>Post 1</h6>
          </Accordion.Header>
          <Accordion.Body>
            {
              <div className="comment">
                <div className="comment-box">
                  <p className="me-4 mt-2 text-primary">Comments</p>
                  <SearchIcon className=" icon-size " />
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
                <div>
                  <p className="mt-2 text-primary">Set Order</p>
                </div>
              </div>
            }
            <div>
              <LoadComments></LoadComments>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h6>Post 2</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className="comment">
              <div className="comment-box">
                <p className="me-3 mt-2 text-primary">Comments</p>
                <SearchIcon className=" icon-size " />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div>
                <p className="mt-2 text-primary">Set Order</p>
              </div>
            </div>
            <LoadComments></LoadComments>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h6>Post 3</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className="comment">
              <div className="comment-box">
                <p className="me-3 mt-2 text-primary">Comments</p>
                <SearchIcon className=" icon-size " />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div>
                <p className="mt-2 text-primary">Set Order</p>
              </div>
            </div>
            <LoadComments></LoadComments>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h6>Post 4</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className="comment">
              <div className="comment-box">
                <p className="me-3 mt-2 text-primary">Comments</p>
                <SearchIcon className=" icon-size " />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div>
                <p className="mt-2 text-primary">Set Order</p>
              </div>
            </div>
            <LoadComments></LoadComments>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h6>Post 5</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className="comment">
              <div className="comment-box">
                <p className="me-3 mt-2 text-primary">Comments</p>
                <SearchIcon className=" icon-size " />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div>
                <p className="mt-2 text-primary">Set Order</p>
              </div>
            </div>
            <LoadComments></LoadComments>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h6>Post 6</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className="comment">
              <div className="comment-box">
                <p className="me-3 mt-2 text-primary">Comments</p>
                <SearchIcon className=" icon-size " />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div>
                <p className="mt-2 text-primary">Set Order</p>
              </div>
            </div>
            <LoadComments></LoadComments>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h6>Post 7</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className="comment">
              <div className="comment-box">
                <p className="me-3 mt-2 text-primary">Comments</p>
                <SearchIcon className=" icon-size " />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div>
                <p className="mt-2 text-primary">Set Order</p>
              </div>
            </div>
            <LoadComments></LoadComments>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h6>Post 8</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className="comment">
              <div className="comment-box">
                <p className="me-3 mt-2 text-primary">Comments</p>
                <SearchIcon className=" icon-size " />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div>
                <p className="mt-2 text-primary">Set Order</p>
              </div>
            </div>
            <LoadComments></LoadComments>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ActiveComents;
