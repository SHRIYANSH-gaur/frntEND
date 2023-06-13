import React, { useEffect, useRef, useState } from 'react';
import './Research.css';
import { Link } from 'react-router-dom';

export default function Research() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const areas = [
    {
      areaname: 'Artificial Intelligence | Machine Learning',
      content: [
        {
          imglink: 'https://i.postimg.cc/C52R1xhg/Mr-Dilip-Singh-Sisodia.jpg',
          name: 'Dr.Dilip Singh Sisodia',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/d3V4q9MF/Mr-Pradeep-Singh.jpg',
          name: 'Dr.Pradeep Singh',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/fRC7b9KT/jitendra.jpg',
          name: 'Dr.Jitendra Kumar Rout',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/tgVgc0YQ/sonal-yadav.png',
          name: 'Dr.Sonal Yadav',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/KvWXK18F/ravi.jpg',
          name: 'Mr.Ravi Kumar',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/1X4CPK6F/visahal.jpg',
          name: 'Mr.Vishal Sathawane',
          proflink: '',
        },
      ],
    },
    {
      areaname: 'Data Minig | Text Mining',
      content: [
        {
          imglink: 'https://i.postimg.cc/C52R1xhg/Mr-Dilip-Singh-Sisodia.jpg',
          name: 'Dr.Dilip Singh Sisodia',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/hGJPnStH/Ms-Aakanksha-Sharaff.jpg',
          name: 'Dr. Aakanksha Sharaff',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/c4hXNWch/Naresh-Kumar-Nagwani.jpg',
          name: 'Dr.Naresh Kumar Nagwani',
          proflink: '',
        },
      ],
    },
    {
      areaname: 'Software Engineering',
      content: [
        {
          imglink: 'https://i.postimg.cc/hGJPnStH/Ms-Aakanksha-Sharaff.jpg',
          name: 'Dr. Aakanksha Sharaff',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/c4hXNWch/Naresh-Kumar-Nagwani.jpg',
          name: 'Dr.Naresh Kumar Nagwani',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/CK1TTJm5/Mr-Pradeep-Singh.jpg',
          name: 'Dr.Pradeep Singh',
          proflink: '',
        },
      ],
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/yNBbxWnQ/IMG-2618.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">Research</div>
            </div>
          </div>
        </div>
        <div className="main-box" ref={sectionRef}>
          <div className="side-box">
            <div className="side-container">
              <div className="side-top-box">
                <p>Research Areas</p>
              </div>

              <ul className="side-link">
                <li>
                  <div className="side-border-left" />
                  <Link to="/Research-Areas">
                    <p>Research Areas</p>
                  </Link>
                </li>
                <li>
                  <div className="side-border-left" />
                  <Link to="/Project">
                    <p>Projects</p>
                  </Link>
                </li>
                <li>
                  {' '}
                  <div className="side-border-left" />
                  <Link to="/Publications">
                    <p>Publications</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${
              isVisible ? 'animate__animated animate__slideInLeft' : ''
            }`}
          >
            <h3 className="hea">Research Areas</h3>
            {areas.map(({ areaname, content }) => (
              <div className="Aiml">
                <div className="areahead">
                  <p>{areaname}</p>
                </div>
                <div className="prof">
                  {content.map(({ imglink, name, proflink }) => (
                    <div className="contentarea">
                      <img src={imglink} height="72" width="50"></img>
                      <div className="profname">
                        <a href={proflink}>{name}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
