import React, { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import { arrow, arrow2, con2, last, lastbg } from "../../assets/image";
import "./home.css";
import "../../font/fontFile.css";
import Content1 from "../../components/MainContent/Content1";
import Content2 from "../../components/WhoWeAre/Content2";
import Content3 from "../../components/WhatWeDo/Content3";
import Content4 from "../../components/OurTeam/Content4";
import Content5 from "../../components/ContactUs/Content5";


function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);
  const contentWidth = window.innerWidth;
  const name = ["Main", "Who we are", "What We Do", "Our Team", "Contact Us"];

  const handlePreviousClick = () => {
    setCurrentPage(Math.max(currentPage - 1, 0)); // Prevent negative index
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="position-relative">
      {currentPage === 4 ? <div > <img className="w-[96%] ml-7 rounded-lg h-[600px] mt-20 " src={lastbg} alt="" />  </div> : <img className="w-full h-screen" src={con2} alt="" />}
      <Navbar />
      <div className="pagination-container">
        <div
          className="scrolling-container"
          style={{ transform: `translateX(-${currentPage * contentWidth}px)` }}
        >
          <div className="content-item ">
             <Content1/>
          </div>
          <div className="content-item1  ">
            <Content2/>
          </div>
          <div className="content-item2  ">
            <Content3/>
          </div>
          <div className="content-item3 w-screen ">
            <Content4/>
          </div>
          <div className="content-item4 w-screen ">
          
             <Content5/>
          </div>
          {/* Add more content items as needed */}
        </div>
      </div>
      <div className="arrows flex justify-between p-5">
        <div className="flex justify-center items-center cursor-pointer">
          {currentPage ? (
            <img
              className="h-10"
              src={arrow2}
              style={{ filter: currentPage === 4 ? "invert(1)" : "none" }}
              onClick={() => handlePreviousClick()}
            />
          ) : null}
          <h1  className={currentPage === 4 ? "text-white" : ""} style={{ fontFamily: "Major Mono Display", fontWeight: 900 ,}}>
            {name[currentPage - 1]}
          </h1>
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <h1 style={{ fontFamily: "Major Mono Display", fontWeight: 900 }}>
            {name[currentPage + 1]}
          </h1>
          <img className="h-10" src={arrow}
          style={{ filter: currentPage === 4 ? "" : "none" }}
          onClick={() => handleNextClick()} />
        </div>
      </div>
    </div>
  );
}

export default Home;
