import React from "react";
import HeroImg from "../../../../assets/Image/Hero.jpg";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="relative">
        <img src={HeroImg} alt="Hero img" />
        <button className="btn btn-secondary mt-10 absolute top-[200px] left-[100px]">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Hero;
