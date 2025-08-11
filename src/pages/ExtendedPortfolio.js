import React, { useState } from 'react';
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
    images: ['/images/graduations/grad18.jpg', '/images/graduations/grad17.jpg',
            '/images/graduations/grad15.jpg', '/images/graduations/grad16.jpg',
            '/images/graduations/grad7.jpg', '/images/graduations/grad8.jpg',
            '/images/graduations/grad9.jpg', '/images/graduations/grad10.jpg',
            '/images/graduations/grad11.jpg', '/images/graduations/grad12.jpg',
            '/images/graduations/grad13.jpg', '/images/graduations/grad14.jpg',
            '/images/graduations/grad1.jpg', '/images/graduations/grad2.jpg',
            '/images/graduations/grad3.jpg', '/images/graduations/grad4.jpg',
            '/images/graduations/grad5.jpg', '/images/graduations/grad6.jpg'],
  },
];

const ExtendedPortfolio = () => {
  // which category is open (null = none). This makes an accordion (one open at a time).
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="extended-portfolio">
      <h1>My Glam Works</h1>
      <Link to="/" className="back-link">← Back to Home</Link>

      <div className="folders">
        {categories.map((cat, i) => (
          <div key={i} className="category-section">
            <button
              className={`category-header ${openIndex === i ? 'open' : ''}`}
              onClick={() => toggleCategory(i)}
              aria-expanded={openIndex === i}
              aria-controls={`cat-${i}`}
            >
              <span className="folder-left">
                <span className="category-title">{cat.title}</span>
              </span>
              <span className="chevron" aria-hidden="true">
                {openIndex === i ? '▲' : '▼'}
              </span>
            </button>

            <div
              id={`cat-${i}`}
              className={`category-content ${openIndex === i ? 'open' : ''}`}
              >
              <div className="category-images">
                {cat.images.map((src, idx) => (
                  <img
                  key={idx}
                  src={src}
                  alt={`${cat.title} ${idx + 1}`}
                  className="portfolio-img"
                  loading="lazy"
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

export default ExtendedPortfolio;

/*<span className="folder-icon" aria-hidden="true"></span>*/