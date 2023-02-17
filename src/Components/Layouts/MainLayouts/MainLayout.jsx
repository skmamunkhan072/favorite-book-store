import React from "react";
import Home from "../../Page/Home/Home/Home";
import Footer from "../../Shear/Footer/Footer";
import NavBar from "../../Shear/NaveBar/NavBar";

const MainLayout = () => {

  // database user name : favorite-book-store
  // database password : 3EPDTkzEvHxgfk4t
  return (
    <div>
      <NavBar />
      <div className="max-w-[1700px] mx-auto">
        <div className="px-14">
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
