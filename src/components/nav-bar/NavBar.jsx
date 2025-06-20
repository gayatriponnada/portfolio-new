import React from "react";
import nameLogo from "../../assets/nameLogo.png";
import Home from "../home/Home";
import About from "../about/About";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="w-4/5 bg-opacity-60  bg-white/20 backdrop-blur-md rounded-xl shadow-lg px-8 py-4 flex justify-between items-center">
        <div>
          <img className="w-32 h-auto rounded-md" src={nameLogo} alt="Logo" />
        </div>

        <div className="flex gap-8 text-white text-lg font-semibold">
          <div className="cursor-pointer" onClick={() => navigate("/home")}>
            Home
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/about")}>
            About
          </div>
          <div
            className="cursor-pointer"
            onClick={() => navigate("/education")}
          >
            Education
          </div>
          <div className="cursor-pointer">Projects</div>
          <div className="cursor-pointer">Contact</div>
        </div>

        <div className="flex gap-4 text-white">
          <i className="fa-brands fa-github fa-lg"></i>
          <i className="fa-brands fa-x-twitter fa-lg"></i>
          <i className="fa-brands fa-linkedin fa-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
