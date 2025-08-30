import React, { useState } from 'react';
import './ExtendedPortfolio.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Weddings',
    images: ['/images/weddings/wed1.jpg', '/images/weddings/wed2.jpg',
            '/images/weddings/ent1.jpg', '/images/weddings/ent2.jpg',
            '/images/weddings/ent3.jpg', '/images/weddings/ent4.jpg',
            '/images/weddings/ent5.jpg', '/images/weddings/ent6.jpg',
            ],
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
    images: ['/images/graduations/grad33.jpg', '/images/graduations/grad34.jpg',
            '/images/graduations/grad31.jpg', '/images/graduations/grad32.jpg',
            '/images/graduations/grad35.jpg', '/images/graduations/grad36.jpg',
            '/images/graduations/grad29.jpg', '/images/graduations/grad30.jpg',
            '/images/graduations/grad21.jpg', '/images/graduations/grad22.jpg',
            '/images/graduations/grad27.jpg', '/images/graduations/grad28.jpg',
            '/images/graduations/grad25.jpg', '/images/graduations/grad26.jpg',
            '/images/graduations/grad23.jpg', '/images/graduations/grad24.jpg',
            '/images/graduations/grad19.jpg', '/images/graduations/grad20.jpg',
            '/images/graduations/grad7.jpg', '/images/graduations/grad8.jpg',
            '/images/graduations/grad18.jpg', '/images/graduations/grad17.jpg',
            '/images/graduations/grad15.jpg', '/images/graduations/grad16.jpg',
            '/images/graduations/grad9.jpg', '/images/graduations/grad10.jpg',
            '/images/graduations/grad11.jpg', '/images/graduations/grad12.jpg',
            '/images/graduations/grad13.jpg', '/images/graduations/grad14.jpg',
            '/images/graduations/grad1.jpg', '/images/graduations/grad2.jpg',
            '/images/graduations/grad3.jpg', '/images/graduations/grad4.jpg',
            '/images/graduations/grad5.jpg', '/images/graduations/grad6.jpg'],
  },
  {
    title: 'Especial Occasions',
    images: ['/images/especials/esp1.jpg', '/images/especials/esp2.jpg',
            '/images/especials/esp3.jpg', '/images/especials/esp4.jpg',
            '/images/especials/esp7.jpg', '/images/especials/esp8.jpg',
            '/images/especials/esp9.jpg', '/images/especials/esp10.jpg',
            '/images/especials/esp11.jpg', '/images/especials/esp12.jpg',
            '/images/especials/esp5.jpg', '/images/especials/esp6.jpg',
            ],
  },
  {
    title: 'Kiddie Edition',
    images: ['/images/kiddie/kid7.jpg', '/images/kiddie/kid8.jpg',
            '/images/kiddie/kid9.jpg','/images/kiddie/kid1.jpg',
            '/images/kiddie/kid2.jpg','/images/kiddie/kid3.jpg',
            '/images/kiddie/kid4.jpg','/images/kiddie/kid5.jpg',
            '/images/kiddie/kid6.jpg', '/images/kiddie/kid01.jpg',
            '/images/kiddie/kid02.jpg',
            ],
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