import React, { useState } from 'react';
import './VisionAndMission.css';
import { Link } from 'react-router-dom';
export default function VisionAndMission() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/9fpN7VnW/IMG-2585.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">About</div>
            </div>
          </div>
        </div>
        <div className="main-box">
          <div className="side-box">
            <div className="side-container">
              <div className="side-top-box">
                <p>About US</p>
              </div>

              <ul className="side-link">
                <li>
                  <div className="side-border-left" />
                  <Link to="/About">History</Link>
                </li>
                <li>
                  <div className="side-border-left" />
                  <Link to="/VisionAndMission">Vision And Mission</Link>
                </li>
                <li>
                  {' '}
                  <div className="side-border-left" />
                  <Link to="/POs">POs,PEOs,PSOs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="drops">
            <h3>
              {' '}
              <i className="fas fa-eye icon"></i>
              <span className="icon-text">Vision</span>
            </h3>
            <div class="title-section text-center about1">
              <span></span>
            </div>
            <div class="r1 about2">
              <div class="c1">
                <p className="p2">
                  To promote Research and Development in the frontier areas of
                  Computer Science & Engineering. To generate Competent
                  Professionals to become part of the industry and Research
                  Organizations at the National and International levels. To
                  provide necessary strengths to enable the students to Innovate
                  and to become Entrepreneurs.
                </p>
              </div>
            </div>
            <div style={{ margin: '20px 0' }}></div>
            <h3>
              <i className="fas fa-plane icon-rotate"></i>
              <span className="icon-text">Mission</span>
            </h3>
            <div class="title-section text-center about1">
              <span></span>
            </div>
            <div class="r1 about2">
              <div class="c1">
                <p className="p2">
                  To impart effective education at undergraduate levels in the
                  field of Computer Science and Engineering. To strive steadily
                  for the overall growth and development of intellect and
                  personality of the students who, as professionals, would be
                  confident to face the challenges of the world of work. To
                  conduct Research and Development and offer consultancy
                  services. To improve continuously the quality of
                  teaching-learning process.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <h1 className="consulting">Publications</h1> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

