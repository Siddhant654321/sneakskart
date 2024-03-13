import React from "react";

import "./HeroSection.css";
import sneakers_hero_section from '../../assets/sneakers_hero_section.png'
import sphere_hero_section from '../../assets/sphere_hero_section.png'

const HeroSection = () => {
  return (
    <section className="hero_section">
      <img src={sneakers_hero_section} alt='sneakers' className="main_hero_image" />
      <img src={sphere_hero_section} alt="" className="hero_section_sphere_1 hero_section_sphere" />
      <img src={sphere_hero_section} alt="" className="hero_section_sphere_2 hero_section_sphere" />
      <img src={sphere_hero_section} alt="" className="hero_section_sphere_3 hero_section_sphere" />
      <img src={sphere_hero_section} alt="" className="hero_section_sphere_4 hero_section_sphere" />
      <img src={sphere_hero_section} alt="" className="hero_section_sphere_5 hero_section_sphere" />
      <img src={sphere_hero_section} alt="" className="hero_section_sphere_6 hero_section_sphere" />
      <img src={sphere_hero_section} alt="" className="hero_section_sphere_7 hero_section_sphere" />
      <img src={sphere_hero_section} alt="" className="hero_section_sphere_8 hero_section_sphere" />
      <img src={sphere_hero_section} alt="" className="hero_section_sphere_9 hero_section_sphere" />
    </section>
  );
};

export default HeroSection;
