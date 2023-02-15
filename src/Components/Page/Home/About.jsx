import React from "react";
import AboutImg from "../../../assets/Image/about.png";

const About = () => {
  return (
    <div className="grid gap-20 grid-cols-1 lg:grid-cols-2 text-start py-20">
      <div>
        <img src={AboutImg} alt="This is banner img " />
      </div>
      <div>
        <h1 className="text-5xl leading-tight font-bold mb-10">
          About
          <span className="text-cyan-500 ml-3">Us</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          cumque atque dolor corporis architecto. Voluptate expedita molestias
          maxime officia natus consectetur dolor quisquam illo? Quis illum
          nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Minus ad eius saepe architecto
          aperiam laboriosam voluptas nobis voluptates id amet eos repellat
          corrupti harum consectetur, dolorum dolore blanditiis quam quo.
        </p>
        <button className="btn btn-outline btn-secondary mt-10">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default About;
