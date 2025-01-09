import React from "react";
import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
const Banner = () => {
  return (
    <div className="w-full h-[600px] relative bg-no-repeat bg-cover bg-center bg-banner">
      {/*  */}
      <div className="absolute w-full opacity-40 h-full top-0 left-0  bg-black" />
      {/*  */}
      <div className="p-4 w-full h-full flex items-center justify-center relative z-20 space-x-[30px] ">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 text-md px-3">
            TV Show
          </p>
          {/*  */}
          <div className=" flex flex-col space-y-3 ">
            <h2 className="text-white text-[40[px] font-bold">
              Nghe nói em thích tôi
            </h2>
            <div className=" flex items-center space-x-3">
              <img src={IconRating} alt="" className="w-8 h-8" />
              <img src={IconRating} alt="" className="w-8 h-8" />
              <img src={IconRating} alt="" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="" className="w-8 h-8" />
            </div>
          </div>
          {/*  */}
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
            fugiat incidunt asperiores iusto porro temporibus aperiam
            repudiandae praesentium ipsam? Esse totam odit commodi vel illum
            inventore laborum ea delectus sunt.
          </p>
          {/*  */}
          <div className="flex items-center space-x-4">
            <button className="p-3 text-white bg-black font-bold text-lg">
              Chi tiết
            </button>

            <button className="p-3 text-white bg-red-500 font-bold text-lg">
              Xem phim
            </button>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />

            <div className="w-full backdrop-blur-sm transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 h-full absolute top-0 left-0 flex items-center justify-center">
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
