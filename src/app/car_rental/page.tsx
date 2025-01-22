import RecentTransactions from "@/components/CarRentalDetails/transictioncard";
import { CarRentalChart } from "@/components/CarRentalDetails/radialchart";
import Maps from "../../../public/Maps.png";
import Image from "next/image";
import Ads1 from "../../../public/Ads1.png";
import car1 from "../../../public/car1.png";
import Sidebar from "../../components/CarRentalDetails/sidenavbar";
import LocationSelector from "../../components/LandingPage/postnavbar";

type Field = {
  label: string;
  placeholder: string;
  type: "location" | "date" | "time";
};


export default function TransactionPage() {

  const pickupFields: Field[] = [
    { label: "Location", placeholder: "Select your city", type: "location" },
    { label: "Pick-up Date", placeholder: "Select date", type: "date" },
    { label: "Pick-up Time", placeholder: "Select time", type: "time" },
  ];

  const dropoffFields: Field[] = [
    { label: "Location", placeholder: "Select your city", type: "location" },
    { label: "Drop-off Date", placeholder: "Select date", type: "date" },
    { label: "Drop-off Time", placeholder: "Select time", type: "time" },
  ];
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden sm:block mt-44">
        <Sidebar />
      </div>
      <main className="flex-1 p-4 lg:p-6 overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-[10rem] gap-4 lg:gap-6">
            {/* Details Rental */}
            <div className="lg:col-span-1 xl:col-span-2">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-950 mb-2 sm:mb-4">
                  Details Rental
                </h1>
                <div className="relative w-full h-40 sm:h-48 lg:h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={Maps}
                    alt="maps"
                    className="object-cover"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="relative w-24 sm:w-32 h-16 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={Ads1}
                      alt="Car Ad"
                      className="object-cover"
                      fill
                      sizes="(max-width: 640px) 96px, 128px"
                    />
                    <div className="absolute top-4 sm:top-6 left-1 sm:left-2">
                      <Image
                        src={car1}
                        alt="Car"
                        width={84}
                        height={27}
                        className="w-20 sm:w-28 h-7 sm:h-9"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-950 text-base sm:text-lg lg:text-xl">
                        Nissan GT - R
                      </h3>
                      <p className="text-xs sm:text-sm text-[#3D5278]">#9761</p>
                    </div>
                    <p className="text-[#3D5278] text-xs sm:text-sm">
                      Sport car
                    </p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                 <LocationSelector title="Pick &mdash; Up" fields={pickupFields} />
                   <LocationSelector title="Drop &mdash; Off" fields={dropoffFields} />
                </div>
              </div>
            </div>

            {/* Top 5 Car Rental and Recent Transactions */}
            <div className="lg:col-span-1 space-y-4 lg:space-y-6">
              <div className="bg-white flex justify-center gap-10 flex-col p-4 rounded-xl shadow-lg">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-950 mb-2 sm:mb-4">
                  Top 5 Car Rental
                </h2>
                <CarRentalChart />
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <RecentTransactions />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
