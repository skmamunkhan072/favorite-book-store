import React from "react";
// icon
import { GiBookAura } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdTagFaces } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#150F2D] px-14 pt-10 text-gray-300">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-start">
        <div>
          <i className="text-8xl text-teal-accent-400">
            <GiBookAura className="text-fuchsia-600" />
          </i>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
            quaerat ipsa aspernatur ad sequi, dolore eveniet vitae quasi.
            Excepturi ipsa odio impedit sequi at hic velit, minus vero sint.
            Voluptas?
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-medium">Quick Link</h1>
          <ul className="pt-5">
            <li>
              <a
                href="#Home"
                class="font-medium hover:underline flex justify-start items-center"
              >
                <IoIosArrowForward className="mt-1 mr-2" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#About"
                class="font-medium hover:underline flex justify-start items-center"
              >
                <IoIosArrowForward className="mt-1 mr-2" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="#FeaturedBooks"
                class="font-medium hover:underline flex justify-start items-center"
              >
                <IoIosArrowForward className="mt-1 mr-2" />
                <span>Featured Books</span>
              </a>
            </li>
            <li>
              <a
                href="#NewArrivals"
                class="font-medium hover:underline flex justify-start items-center"
              >
                <IoIosArrowForward className="mt-1 mr-2" />
                <span>New Arrivals</span>
              </a>
            </li>
            <li>
              <a
                href="#Reviews"
                class="font-medium hover:underline flex justify-start items-center"
              >
                <IoIosArrowForward className="mt-1 mr-2" />
                <span>Reviews</span>
              </a>
            </li>
            <li>
              <a
                href="#OurBlog"
                class="font-medium hover:underline flex justify-start items-center"
              >
                <IoIosArrowForward className="mt-1 mr-2" />
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-medium">Contact Info</h1>
          <ul className="pt-5">
            <li className="flex justify-start items-center">
              <BsTelephoneFill className="mt-1 mr-2" />
              <p>+880 13148 54573</p>
            </li>
            <li className="flex justify-start items-center">
              <MdEmail className="mt-1 mr-2" />
              <p>skmamunkhan072@gmail.com</p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-medium">Follow Us</h1>

          <ul className="pt-5">
            <li className="flex justify-start items-center hover:text-info cursor-pointer">
              <ImFacebook className="mr-4 text-xl" />
              <span>Facebook</span>
            </li>
            <li className="flex justify-start items-center hover:text-info cursor-pointer">
              <ImLinkedin2 className="mr-4 text-xl" />
              <span>LinkedIn</span>
            </li>
            <li className="flex justify-start items-center hover:text-info cursor-pointer">
              <AiOutlineTwitter className="mr-4 text-xl" />
              <span>Twitter </span>
            </li>
            <li className="flex justify-start items-center hover:text-info cursor-pointer">
              <AiOutlineInstagram className="mr-4 text-xl" />
              <span>Instagram</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="flex justify-center items-center pb-2">
          <span>Design By</span>
          <MdTagFaces className="mt-1 text-xl mx-2 text-cyan-500" />
          <span className="text-cyan-500">Sk Mamun Khan</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
