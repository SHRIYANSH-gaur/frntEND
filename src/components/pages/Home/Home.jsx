import React from 'react';
import NewsAndAnnouncement from '../NewsAndAnnouncement/NewsAndAnnouncement';
import Events from '../Events/Events';
import './Home.css';
import MyCarousel from './MyCarousel';
import Welcome from './Welcome';
export default function Home() {
  return (
    <div>
      <MyCarousel />
      <Welcome/>
      <div className="mu">
        <NewsAndAnnouncement  heading="News" tag="1"/>
        <Events heading="Events" tag="2"/>
      </div>
    </div>
  );
}
