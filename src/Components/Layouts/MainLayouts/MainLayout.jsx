import React from "react";
import Home from "../../Page/Home/Home";
import NavBar from "../../Shear/NaveBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-[1700px] mx-auto">
        <div className="px-14">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
