import React from "react";

import "./HeroSection.css";
import sneakers_hero_section from '../../assets/sneakers_hero_section.png'
import sphere_hero_section from '../../assets/sphere_hero_section.png'

const HeroSection = () => {
  return (
    <section className="hero_section">
      <img src={sneakers_hero_section} alt='sneakers' className="main_hero_image" />
    </section>
  );
};

export default HeroSection;
