import React, { Component } from "react";

class Bootstrap_4 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active" />
            <li data-target="#demo" data-slide-to="1" />
            <li data-target="#demo" data-slide-to="2" />
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/la.jpg"
                alt="Los Angeles"
                width="1100"
                height="500"
              />
              <div className="carousel-caption">
                <h3>Los Angeles</h3>
                <p>We had such a great time in LA!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/chicago.jpg"
                alt="Chicago"
                width="1100"
                height="500"
              />
              <div className="carousel-caption">
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/ny.jpg"
                alt="New York"
                width="1100"
                height="500"
              />
              <div className="carousel-caption">
                <h3>New York</h3>
                <p>We love the Big Apple!</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>
            <div className="col-lg-4 col-md-4">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>
            <div className="col-lg-4 col-md-4">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bootstrap_4;
