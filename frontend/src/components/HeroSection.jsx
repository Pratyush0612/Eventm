import React from 'react'
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/eventimgs.webp" alt="restaurant" />
      <div className="item">
        <h3>Tailored Events, Timeless Memories</h3>
        <div>
          <h1>Crafting Unforgettable Moments, Every Time</h1>
          <p>
          Streamline planning with our comprehensive, user-friendly event management platform.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection