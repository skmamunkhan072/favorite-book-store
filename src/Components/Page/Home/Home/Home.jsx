import React from "react";
import Banner from "../../../../assets/Image/Home_banner.png";
import About from "../About/About";
import NewArrivals from "../About/NewArrivals";
import FeaturedBooks from "../BookGallery/FeaturedBooks";
import Hero from "../Hero/Hero";
import OurBlog from "../Hero/OurBlog/OurBlog";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="Home">
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
      <NewArrivals />
      <Hero />
      <OurBlog />
    </div>
  );
};

export default Home;
