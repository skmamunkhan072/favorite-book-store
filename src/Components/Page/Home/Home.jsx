import React from "react";
import Banner from "../../../assets/Image/Home_banner.png";
import Services from "./Services";
import About from "./About";
import FeaturedBooks from "./FeaturedBooks";

const Home = () => {
  return (
    <div>
      <div className="grid gap-20 grid-cols-1 lg:grid-cols-2 text-start py-20">
        <div>
          <h1 className="text-5xl leading-tight font-bold mb-10">
            WELCOME TO
            <br />
            <span className="text-cyan-500">BOOK STORE</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            molestias atque laborum non fuga ex deserunt. Exercitationem velit
            ducimus praesentium, obcaecati hic voluptate id tenetur fuga illum
            quidem omnis? Rerum?
          </p>
          <button className="btn btn-outline btn-secondary mt-10">
            Learn more
          </button>
        </div>
        <div>
          <img src={Banner} alt="This is banner img " />
        </div>
      </div>
      <Services />
      <About />
      <FeaturedBooks />

      <div className="border h-[300px] ">hekki</div>
    </div>
  );
};

export default Home;
