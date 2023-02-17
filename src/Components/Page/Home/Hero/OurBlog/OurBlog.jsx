import React from "react";
// icon
import { BsSuitHeartFill } from "react-icons/bs";

// img
import blog_1 from "../../../../../assets/Image/blog_1.jpg";
import blog_2 from "../../../../../assets/Image/blog_2.jpg";
import blog_3 from "../../../../../assets/Image/blog_3.jpg";

const OurBlog = () => {
  const AllBlog = [
    {
      _id: 1,
      blogTitle: "Bloger!",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,quos quis quasi ut impedit reiciendis voluptatem rem esse ratione omnis, laudantium earum. Aperiam nesciunt dolore aliquam repellat consequatur amet ducimus.",
      blogPublishedDate: "1-3-2023",
      blogImg: blog_1,
    },
    {
      _id: 2,
      blogTitle: "Bloger!",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,quos quis quasi ut impedit reiciendis voluptatem rem esse ratione omnis, laudantium earum. Aperiam nesciunt dolore aliquam repellat consequatur amet ducimus.",
      blogPublishedDate: "1-3-2023",
      blogImg: blog_2,
    },
    {
      _id: 3,
      blogTitle: "Bloger!",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,quos quis quasi ut impedit reiciendis voluptatem rem esse ratione omnis, laudantium earum. Aperiam nesciunt dolore aliquam repellat consequatur amet ducimus.",
      blogPublishedDate: "1-3-2023",
      blogImg: blog_3,
    },
  ];
  return (
    <section id="OurBlog" className="pb-20">
      <h1 className="text-5xl leading-tight font-bold mb-10">
        Our
        <span className="text-cyan-500 ml-3">Blog</span>
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {AllBlog.map((data) => (
          <div className="card  bg-[#150F2D] shadow-xl">
            <figure className="h-[300px]">
              <img src={data?.blogImg} alt="Shoes" />
            </figure>
            <div className="card-body text-gray-300">
              <h2 className="card-title">Bloger!</h2>
              <p className="text-start">
                {data?.blogDescription.length > 200
                  ? data?.blogDescription.slice(1, 200) + "..."
                  : data?.blogDescription}
              </p>
              <div className="flex justify-end items-center">
                <BsSuitHeartFill className="text-2xl cursor-pointer text-info" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBlog;
