import React from "react";
import bookimg from "../../../../assets/Image/arrival_9.jpg";

const NewArrivals = () => {
  const AllFecturedBooks = [
    {
      _id: 1,
      AuthorName: "Mamun Khan",
      BookTitle:
        "react function Book Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mreact function Book Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto.",
      Category: "programing",
      BookDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.",
      BookPrice: 250,
      BookOldPrice: 300,
      BookPublishedDate: 2 - 15 - 2023,
      BookImgUrl: "",
    },
    {
      _id: 2,
      AuthorName: "Mamun Khan",
      BookTitle: "react function Book",
      Category: "programing",
      BookDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.",
      BookPrice: 250,
      BookOldPrice: 300,
      BookPublishedDate: 2 - 15 - 2023,
      BookImgUrl: "",
    },
    {
      _id: 3,
      AuthorName: "Mamun Khan",
      BookTitle: "react function Book",
      Category: "programing",
      BookDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.",
      BookPrice: 250,
      BookOldPrice: 300,
      BookPublishedDate: 2 - 15 - 2023,
      BookImgUrl: "",
    },
    {
      _id: 4,
      AuthorName: "Mamun Khan",
      BookTitle: "react function Book",
      Category: "programing",
      BookDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.",
      BookPrice: 250,
      BookOldPrice: 300,
      BookPublishedDate: 2 - 15 - 2023,
      BookImgUrl: "",
    },
    {
      _id: 5,
      AuthorName: "Mamun Khan",
      BookTitle: "react function Book",
      Category: "programing",
      BookDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.",
      BookPrice: 250,
      BookOldPrice: 300,
      BookPublishedDate: 2 - 15 - 2023,
      BookImgUrl: "",
    },
    {
      _id: 6,
      AuthorName: "Mamun Khan",
      BookTitle: "react function Book",
      Category: "programing",
      BookDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.",
      BookPrice: 250,
      BookOldPrice: 300,
      BookPublishedDate: 2 - 15 - 2023,
      BookImgUrl: "",
    },
    {
      _id: 7,
      AuthorName: "Mamun Khan",
      BookTitle: "react function Book",
      Category: "programing",
      BookDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.",
      BookPrice: 250,
      BookOldPrice: 300,
      BookPublishedDate: 2 - 15 - 2023,
      BookImgUrl: "",
    },
    {
      _id: 8,
      AuthorName: "Mamun Khan",
      BookTitle: "react function Book",
      Category: "programing",
      BookDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.",
      BookPrice: 250,
      BookOldPrice: 300,
      BookPublishedDate: 2 - 15 - 2023,
      BookImgUrl: "",
    },
    {
      _id: 9,
      AuthorName: "Mamun Khan",
      BookTitle: "react function Book",
      Category: "programing",
      BookDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.",
      BookPrice: 250,
      BookOldPrice: 300,
      BookPublishedDate: 2 - 15 - 2023,
      BookImgUrl: "",
    },
    {
      _id: 10,
      AuthorName: "Mamun Khan",
      BookTitle: "react function Book",
      Category: "programing",
      BookDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.",
      BookPrice: 250,
      BookOldPrice: 300,
      BookPublishedDate: 2 - 15 - 2023,
      BookImgUrl: "",
    },
  ];
  return (
    <section id="NewArrivals" className="py-20">
      <h1 className="text-5xl leading-tight font-bold mb-10">
        New
        <span className="text-cyan-500 ml-3">Arrivals</span>
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {AllFecturedBooks.map((data) => (
          <div
            key={data?._id}
            className="card bg-gray-100 shadow-xl rounded-lg pt-10"
          >
            <figure className="h-[220px] w-[200px] mx-auto rounded-none cursor-pointer">
              <img
                src={bookimg}
                alt="Shoes"
                className="w-full h-full rounded-none"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-medium text-gray-600 text-start">
                Author Name: {data?.AuthorName}
              </h2>
              <p className="text-gray-500 text-start">
                {data?.BookTitle?.length > 200
                  ? data?.BookTitle.slice(1, 100) + "....."
                  : data?.BookTitle}
              </p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star w-8 h-8"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star w-8 h-8"
                  checked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star w-8 h-8"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star w-8 h-8"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star w-8 h-8"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
