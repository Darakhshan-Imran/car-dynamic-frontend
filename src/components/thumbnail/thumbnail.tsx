import { useState } from "react";
import Image from "next/image";
import Ads1 from "../../../public/Ads1.png";
import car1 from "../../../public/car1.png";

interface ViewDataItem {
  id: number;
  src: string;
  alt: string;
}

const ViewData = [
    {
      id: 1,
      src: "/View1.png",
      alt: "exterior",
    },
    {
      id: 2,
      src: "/cars-interior/View2.png",
      alt: "interior",
    },
    {
      id: 3,
      src: "/cars-interior/View3.png",
      alt: "sitting",
    },
  ];

 

  const AdsComponent = () => {
    // State to manage the main image
    const [mainImage, setMainImage] = useState<string>(ViewData[0].src);
  
    const handleThumbnailClick = (src: string) => {
      setMainImage(src);
    };
  
    return (
      <div className="flex flex-col w-full lg:flex-row">
        {/* Main Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-around items-center mx-0 lg:mx-3 mb-4 lg:mb-0">
          <div className="w-full relative m-2 px-2">
            {/* Main Image */}
            <Image
              src={mainImage}
              alt="Main Car"
              width={300}
              height={300}
              layout="responsive"
              className="rounded-lg"
            />
            {/* Text Content */}
            {/* <div className="absolute top-2 lg:top-5 w-full lg:w-4/5 pl-3 bg-opacity-75 flex flex-col p-2 lg:p-4 rounded-lg">
              <h2 className="font-semibold text-xl lg:text-3xl text-white mb-2 lg:mb-4 text-balance">
                Sports car with the best design and acceleration
              </h2>
              <p className="font-normal text-sm lg:text-lg text-white text-balance">
                Safety and comfort while driving a futuristic and elegant sports car
              </p>
            </div> */}
          </div>
  
          {/* Thumbnails Section */}
          <div className="w-full flex gap-2 lg:gap-3 px-2 overflow-x-auto lg:overflow-x-visible">
            {ViewData.map((view) => (
              <div
                key={view.id}
                className={`w-1/3 lg:w-auto flex-shrink-0 cursor-pointer ${
                  mainImage === view.src ? "border-2 border-blue-500 rounded-lg" : ""
                }`}
                onClick={() => handleThumbnailClick(view.src)}
              >
                <Image
                  src={view.src}
                  alt={view.alt}
                  width={20}
                  height={20}
                  layout="responsive"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AdsComponent;