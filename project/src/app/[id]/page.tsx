import Image from "next/image";
import Link from "next/link";
import { nightCityImages, NightCityImage } from "../data";

const PhotoPage = ({ params: { id } }: { params: { id: string } }) => {
  const selectedImage = nightCityImages.find(
    (item: NightCityImage) => item.id === parseInt(id)
  )!;

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-center">
        <div className="w-full md:w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4">
          <Image
            src={selectedImage.src}
            alt="Night City"
            priority={true}
            className="w-full h-[450px] object-cover"
          />
          <h5 className="font-bold mb-1">{selectedImage.photograph}</h5>
          <p className="mb-1">{selectedImage.location}</p>
          <Link
            href="/"
            className="inline-block border rounded-[5px] bg-green-500 text-white p-2"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
