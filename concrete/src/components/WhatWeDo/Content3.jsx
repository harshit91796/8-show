// /src/components/Content3.jsx
import React, { useRef, useState } from "react";
import { brand, gd, meeting, threed, uiux } from "../../assets/image";
import {
  ArrowBackIos,
  ArrowForwardIos,
  ArrowOutward,
} from "@mui/icons-material";
import "./content3.css";

function Content3() {
  const scrollContainerRef = useRef(null); // Reference to the scrollable container
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth; // Get container width
      const currentScroll = scrollContainerRef.current.scrollLeft; // Get current scroll position

      // Calculate new scroll position, ensuring it doesn't exceed container bounds
      const newScroll = Math.max(0, currentScroll - containerWidth * 0.5); // Scroll by half the container width
      scrollContainerRef.current.scrollLeft = newScroll;
      setScrollPosition(newScroll);
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const contentWidth = scrollContainerRef.current.scrollWidth; // Get content width

      // Calculate new scroll position, preventing scrolling past content end
      const newScroll = Math.min(
        contentWidth - containerWidth,
        currentScroll + containerWidth * 0.5
      );
      scrollContainerRef.current.scrollLeft = newScroll;
      setScrollPosition(newScroll);
    }
  };

  return (
    <div className="text-8xl m-10 flex flex-col gap-16">
      <h1>What We Do</h1>
      <div className="flex gap-10">
        <button
          onClick={handleScrollLeft}
          disabled={scrollPosition === 0}
          className="scroll-button"
        >
          <ArrowBackIos />
        </button>

        <div className="scrolldiv flex " ref={scrollContainerRef}>
          {/* Make this div scrollable */}
          <div className="scrollingContainerDiv flex gap-10 w-[1800px]">
            {/* Content */}
            <div className="bg-white h-[300px] w-[20%]">
              <img src={brand} className="h-[240px] w-[400px]" />
              <div className="flex justify-start items-center gap-1 m-1">
                <h1 className="text-3xl">Branding</h1>
                <ArrowOutward />
              </div>
            </div>

            <div className="bg-white mt-10 h-[200px] w-60 position-relative">
              <img
                src={gd}
                className="position-absolute object-cover h-[140px] w-[250px]"
              />
              <div className="flex justify-start items-center gap-1 m-1">
                <h1 className="text-3xl">Graphic Design</h1>
                <ArrowOutward />
              </div>
            </div>

            <div className="bg-white h-[300px] w-[40%]">
              <img src={threed} className="h-[240px]" />
              <div className="flex justify-start items-center gap-1 m-1">
                <h1 className="text-3xl">3D Design</h1>
                <ArrowOutward />
              </div>
            </div>

            <div className="bg-white mt-4 h-[300px] w-[30%]">
              <img src={uiux} className="h-[240px] w-[400px]" />
              <div className="flex justify-start items-center gap-1 m-1">
                <h1 className="text-3xl">UI/UX</h1>
                <ArrowOutward />
              </div>
            </div>

            <div className="bg-white h-[300px] w-60">
              <img src={uiux} className="h-[240px] w-[400px]" />
              <div className="flex justify-start items-center gap-1 m-1">
                <h1 className="text-3xl">UI/UX</h1>
                <ArrowOutward />
              </div>
            </div>

            <div className="bg-white h-[300px] w-60">
              <img src={threed} className="h-[240px] w-[400px]" />
              <div className="flex justify-start items-center gap-1 m-1">
                <h1 className="text-3xl">3D Design</h1>
                <ArrowOutward />
              </div>
            </div>

            <div className="bg-white h-[300px] w-[50%]">
              <img src={gd} className="h-[240px] w-[400px]" />
              <div className="flex justify-start items-center gap-1 m-1">
                <h1 className="text-3xl">Graphic Design</h1>
                <ArrowOutward />
              </div>
            </div>
          </div>

          <div className="button-container flex justify-between mt-4"></div>
        </div>
        <button
          onClick={handleScrollRight}
          disabled={
            scrollPosition ===
            scrollContainerRef.current?.scrollWidth -
              scrollContainerRef.current?.offsetWidth
          }
          className="scroll-button"
        >
          <ArrowForwardIos />
        </button>
      </div>
    </div>
  );
}

export default Content3;
