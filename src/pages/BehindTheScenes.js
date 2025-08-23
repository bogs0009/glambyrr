// src/pages/BehindTheScenes.js
import React, { useState } from 'react';
import './ExtendedPortfolio.css'; // reuse the same styles so it matches
import { Link } from 'react-router-dom';

/**
 * Put your actual video files and (optional) poster images in /public/videos and /public/images
 * The structure mirrors your ExtendedPortfolio categories.
 */
const videoCategories = [
  {
    title: 'Birthdays — BTS',
    videos: [
      { src: '/videos/birthdays/birth1.mp4', poster: '/images/birthdays/Bday_bts1.jpg' },
      { src: '/videos/birthdays/birth2.mp4', poster: '/images/birthdays/Bday_bts2.jpg' },
      { src: '/videos/birthdays/birth3.mp4', poster: '/images/birthdays/Bday_bts3.jpg' },
    ],
  },
  {
    title: 'Graduations — BTS',
    videos: [
      { src: '/videos/graduations/Grad_bts1.mp4', poster: '/images/graduations/Grad_bts1.jpg' },
      { src: '/videos/graduations/Grad_bts2.mp4', poster: '/images/graduations/Grad_bts2.jpg' },
    ],
  },
];

const BehindTheScenes = () => {
  const [openIndex, setOpenIndex] = useState(null);
  // Inside BehindTheScenes component
  const toggleCategory = (i) => {
    setOpenIndex((prev) => {
      // If closing a currently open category, pause its videos
      if (prev === i) {
        const vids = document.querySelectorAll(`#bts-${i} video`);
        vids.forEach((v) => v.pause());
        return null;
      }
      return i;
    });
  };


  return (
    <div className="extended-portfolio">
      <h1>Behind the Scene</h1>
      <Link to="/" className="back-link">← Back to Home</Link>

      <div className="folders">
        {videoCategories.map((cat, i) => (
          <div key={i} className="category-section">
            <button
              className={`category-header ${openIndex === i ? 'open' : ''}`}
              onClick={() => toggleCategory(i)}
              aria-expanded={openIndex === i}
              aria-controls={`bts-${i}`}
            >
              <span className="folder-left">
                <span className="category-title">{cat.title}</span>
              </span>
              <span className="chevron" aria-hidden="true">
                {openIndex === i ? '▲' : '▼'}
              </span>
            </button>

            <div
              id={`bts-${i}`}
              className={`category-content ${openIndex === i ? 'open' : ''}`}
            >
              <div className="category-images">
                {cat.videos.map((v, idx) => (
                  <video
                    key={idx}
                    className="portfolio-video"
                    src={v.src}
                    poster={v.poster}
                    controls
                    preload="metadata"
                    playsInline
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BehindTheScenes;
