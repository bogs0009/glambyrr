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
    images: ['/images/birthdays/bday6.jpg', '/images/birthdays/bday7.jpg',
            '/images/birthdays/bday1.jpg', '/images/birthdays/bday2.jpg',
            '/images/birthdays/bday3.jpg', '/images/birthdays/bday4.jpg',
            '/images/birthdays/bday5.jpg',],
  },
  {
    title: 'Graduations',
    images: ['/images/graduations/grad7.jpg', '/images/graduations/grad8.jpg',
            '/images/graduations/grad9.jpg', '/images/graduations/grad10.jpg',
            '/images/graduations/grad11.jpg', '/images/graduations/grad12.jpg',
            '/images/graduations/grad13.jpg', '/images/graduations/grad14.jpg',
            '/images/graduations/grad1.jpg', '/images/graduations/grad2.jpg',
            '/images/graduations/grad3.jpg', '/images/graduations/grad4.jpg',
            '/images/graduations/grad5.jpg', '/images/graduations/grad6.jpg'],
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
