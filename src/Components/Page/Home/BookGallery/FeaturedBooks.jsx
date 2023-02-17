import React, { useEffect, useState } from "react";
import bookimg from "../../../../assets/Image/arrival_6.jpg";

const FeaturedBooks = () => {
  const [allFecturedBooks, SetAllFecturedBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-book")
      .then((res) => res.json())
      .then((data) => SetAllFecturedBooks(data));
  }, [allFecturedBooks]);

  return (
    <section id="FeaturedBooks" className="py-20">
      <h1 className="text-5xl leading-tight font-bold mb-10">
        Featured
        <span className="text-cyan-500 ml-3">Books</span>
      </h1>
      <div className="py-10">
        <form>
          <input
            type="text"
            placeholder="book Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Book Cetagory"
            className="input input-bordered input-primary w-full max-w-xs mx-3 my-5 lg:my-0"
          />
          <button className="btn btn-outline btn-secondary" type="submit">
            Search hear
          </button>
        </form>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allFecturedBooks.map((data) => (
          <div
            key={data?._id}
            className="card bg-gray-100 shadow-xl rounded-lg pt-10"
          >
            <figure className="h-[220px] w-[200px] mx-auto rounded-none cursor-pointer">
              <img
                src={bookimg}
                // src={data?.BookImgUrl ? data?.BookImgUrl : bookimg}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
