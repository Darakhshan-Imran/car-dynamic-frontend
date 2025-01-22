// import Image, { StaticImageData } from "next/image";
// import ButtonComponent from "../button";
// import Link from "next/link";
// import { client } from "../../sanity/lib/client";

// interface BannerCardProps {
//   title: string;
//   description: string;
//   buttonText: string;
//   carImage: StaticImageData | string;
//   backgroundImage: StaticImageData | string;
// }



//   const Hero = async () => {
    
//     const data:BannerCardProps[] = await client.fetch(`*[_type == "bannerCard"]{
//       title,
//       description,
//       buttonText,
//       "carImage": carImage.asset->url,
//       "backgroundImage": backgroundImage.asset->url
//     }`)
    

//   return (
//     <div className="wrapper py-4 sm:py-6 md:py-8 lg:py-10">
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
//         {data.map((items, index) => (
//           <div key={index} className="w-full sm:w-1/2 max-w-[640px] relative">
//             {/* Background gradient */}
//             <Image
//               src={items.backgroundImage}
//               alt="Card Background"
//               width={640}
//               height={360}
//               className="cursor-pointer w-full h-auto rounded-lg shadow-md"
//             />

//             {/* Text Overlay */}
//             <div className="flex flex-col items-center justify-between sm:flex-row">
//               <div className="sm:absolute inset-0 flex flex-col justify-center items-start text-white p-4 rounded-lg w-[15rem] sm:w-[320px] h-[200px] mt-10">
//                 <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
//                   {items.title}
//                 </h1>
//                 <p className="text-sm sm:text-base lg:text-lg mb-4">
//                   {items.description}
//                 </p>
//                 <div>
//                   <Image
//                     src={items.carImage}
//                     alt="Car Image"
//                     width={410}
//                     height={90}
//                     className="absolute left-[15rem] z-10 w-[20rem] h-[6rem]"
//                   />
//                 </div>

//                 <ButtonComponent className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
//                   <Link href="/product">Rental Car</Link>
//                 </ButtonComponent>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client"
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";

interface BannerCardProps {
  title: string;
  description: string;
  buttonText: string;
  carImage: StaticImageData | string;
  backgroundImage: StaticImageData | string;
}

const Hero = () => {
  const [data, setData] = useState<BannerCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const bannerData: BannerCardProps[] = await client.fetch(
        `*[_type == "bannerCard"]{
          title,
          description,
          buttonText,
          "carImage": carImage.asset->url,
          "backgroundImage": backgroundImage.asset->url
        }`
      );
      setData(bannerData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
  {data.map((item, index) => (
    <div key={index} className="w-full sm:w-1/2 max-w-[640px] relative">
      {/* Background gradient */}
      <Image
        src={item.backgroundImage}
        alt="Card Background"
        width={640}
        height={360}
        className="cursor-pointer w-full h-auto rounded-lg shadow-md"
      />

      {/* Text Overlay */}
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 rounded-lg w-full sm:w-[320px] h-auto sm:h-[200px] mt-4 sm:mt-10">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            {item.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
            {item.description}
          </p>
          <div>
            <Image
              src={item.carImage}
              alt="Car Image"
              width={410}
              height={90}
              className="absolute left-1/2 transform -translate-x-1/2 sm:left-[25rem] z-10 w-[16rem] sm:w-[20rem] h-[5rem] sm:h-[6rem]"
            />
          </div>

          <button className="px-5 sm:px-8 py-2 mt-4 bg-yellow-400 text-black text-lg font-medium rounded-[3px] hover:bg-blue-200 transition-colors">
            <Link href="/product">Rental Car</Link>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

    // <div className="wrapper py-4 sm:py-6 md:py-8 lg:py-10">
    //   <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
    //     {data.map((item, index) => (
    //       <div key={index} className="w-full sm:w-1/2 max-w-[640px] relative">
    //         {/* Background gradient */}
    //         <Image
    //           src={item.backgroundImage}
    //           alt="Card Background"
    //           width={640}
    //           height={360}
    //           className="cursor-pointer w-full h-auto rounded-lg shadow-md"
    //         />

    //         {/* Text Overlay */}
    //         <div className="flex flex-col items-center justify-between sm:flex-row">
    //           <div className="sm:absolute inset-0 flex flex-col justify-center items-start text-white p-4 rounded-lg w-[15rem] sm:w-[320px] h-[200px] mt-10">
    //             <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
    //               {item.title}
    //             </h1>
    //             <p className="text-sm sm:text-base lg:text-lg mb-4">
    //               {item.description}
    //             </p>
    //             <div>
    //               <Image
    //                 src={item.carImage}
    //                 alt="Car Image"
    //                 width={410}
    //                 height={90}
    //                 className="absolute left-[15rem] z-10 w-[20rem] h-[6rem]"
    //               />
    //             </div>

    //             <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
    //               <Link href="/product">Rental Car</Link>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Hero;
