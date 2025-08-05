import React from 'react';
import './ExtendedPortfolio.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Weddings',
    images: ['/images/weddings/wed1.jpg', '/images/weddings/wed2.jpg'],
  },
  {
    title: 'Birthdays',
    images: ['/images/birthdays/bday1.jpg', '/images/birthdays/bday2.jpg',
            '/images/birthdays/bday3.jpg', '/images/birthdays/bday4.jpg'],
  },
  {
    title: 'Graduations',
    images: ['/images/graduations/grad1.jpg', '/images/graduations/grad2.jpg',
            '/images/graduations/grad3.jpg', '/images/graduations/grad4.jpg'],
  },
];

const ExtendedPortfolio = () => {
  return (
    <div className="extended-portfolio">
      <h1>My Glam Works</h1>
      <Link to="/" className="back-link">← Back to Home</Link>

      {categories.map((cat, i) => (
        <div key={i} className="category-section">
          <h2>{cat.title}</h2>
          <div className="category-images">
            {cat.images.map((src, index) => (
              <img key={index} src={src} alt={`${cat.title}-${index}`} className="portfolio-img" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtendedPortfolio;
