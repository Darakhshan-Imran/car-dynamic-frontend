import RecentTransactions from "@/components/CarRentalDetails/transictioncard";
import { Component } from "@/components/CarRentalDetails/radialchart";
import Maps from "../../../public/Maps.png";
import Image from "next/image";
import Ads1 from "../../../public/Ads1.png";
import car1 from "../../../public/car1.png";
import LocationSelector from "../../components/LandingPage/postnavbar";
import Sidebar from "../../components/CarRentalDetails/sidenavbar";

type CarData = {
  car: string;
  color: string;
  value: number;
};

const carData: CarData[] = [
  { car: "Sport Car", color: "#0D3559", value: 17439 },
  { car: "SUV", color: "#175D9C", value: 9478 },
  { car: "Coupe", color: "#4397D0", value: 18197 },
  { car: "Hatchback", color: "#7EB6E8", value: 12510 },
  { car: "MPV", color: "#A6D1F0", value: 14406 },
];

const pickupFields = [
  { label: "Locations", placeholder: "Select your city" },
  { label: "Date", placeholder: "Select your date" },
  { label: "Time", placeholder: "Select your time" },
]

const dropoffFields = [
  { label: "Locations", placeholder: "Select your city" },
  { label: "Date", placeholder: "Select your date" },
  { label: "Time", placeholder: "Select your time" },
]

export default function TransactionPage() {
  return (
    <main className=" bg-gray-100 py-8 flex">
      <div className="flex w-2/3 gap-28 h-full">
        <div className="w-1/3">
          <Sidebar />
        </div>
        <div className="w-3/5">
          {/* Car on Rent with Map Location and details */}
          <div className="w-full flex flex-col gap-10 justify-center items-start shadow-lg p-5 bg-white">
            <h1 className="text-2xl font-semibold text-gray-950 py-4">
              Details Rental
            </h1>

            {/* Map Image */}

            {/* <div className="flex justify-center mt-4"> */}
            <Image
              src={Maps}
              alt="maps"
              width={570}
              height={272}
              className="object-cover w-full h-[272px]"
            />
            {/* </div> */}

            {/* Car Detail */}
            <div className="flex gap-5 w-full">
              <div className="relative w-[150px] h-[90px]">
                <Image
                  src={Ads1}
                  alt="Car Ad"
                  width={132}
                  height={70}
                  className="rounded-lg w-[150px] h-[90px]"
                />

                <div className="absolute top-6 left-2">
                  <Image
                    src={car1}
                    alt="Car"
                    width={116}
                    height={36}
                    className="w-[116px] h-[36px]"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="flex justify-between w-full">
                  <h3 className="font-semibold text-gray-950 text-xl">
                    Nissan GT - R
                  </h3>
                  <p className="text-sm text-[#3D5278]">#9761</p>
                </div>
                <p className="text-[#3D5278] flex items-start">Sport car</p>
              
            </div>
            </div>

            {/* Pick and Drop options */}
            <div className="flex flex-col justify-start">
              <LocationSelector title="Pick &mdash; Up" fields={pickupFields} />
              <LocationSelector title="Drop &mdash; Off" fields={dropoffFields} />
            </div>

            {/* Recent Transactions */}
            <div className="flex justify-between w-full">
              <div>
                <h3 className="text-2xl text-gray-900 font-semibold">
                  Total Rental Price
                </h3>
                <p className="">Overall price and includes rental discount</p>
              </div>
              <div className="font-semibold text-2xl text-gray-900 ">
                $80.00
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Summary */}

      <div className="container mx-auto p-4 w-1/3 mt-10 flex flex-col gap-4">
        <div className="w-full flex flex-col px-3 bg-white">
          <h1 className="text-2xl font-semibold text-gray-950">
            Top 5 Car Rental
          </h1>
          <div className="flex">
            <div className="w-1/2">
              <Component />
            </div>
            <div className="w-1/2 rounded-2xl">
              {/* Mapping */}

              <div className="w-full md:w-1/2 flex flex-col gap-4">
                {carData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></span>
                      <p className="text-gray-700 font-medium ml-2 w-[10rem]">
                        {item.car}
                      </p>
                    </div>
                    <p className="text-gray-700 font-medium ml-8">
                      {item.value.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl">
          <RecentTransactions />
        </div>
      </div>
    </main>
  );
}
