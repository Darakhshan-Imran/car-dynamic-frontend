import { client } from "../../../sanity/lib/client";
import DetailClient from "../../../components/Rental-Summary-Card/DetailClient";
import ReviewDetails from "@/components/Rental-Summary-Card/Review"

interface Params {
  params: {
    id: string;
  };
}

const getCarData = async (id: string) => {
  return await client.fetch(
    `*[_type == "cars" && id == ${id}]{
      id,
      name,
      type,
      description,
      reviews,
      "average": rating.average,
      fuelCapacity,
      transmission,
      passengers,
      priceAfterDiscount,
      originalPrice,
      is_favourite,
      "image": images.mainImage.asset->url,
      "image1": images.sideAngleImages[0].asset->url,
      "image2": images.sideAngleImages[1].asset->url,
      "image3": images.sideAngleImages[2].asset->url
    }[0]`
  );
};

const CarDetailServer = async ({ params }: Params) => {
  const carData = await getCarData(params.id);
console.log(carData)

  return (
  <div className="mt-44 bg-slate-100 pb-20">
  <DetailClient carData={carData} />;

  <ReviewDetails/>
  </div>
)};

export default CarDetailServer;



