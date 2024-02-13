import Image from "next/image";

import { nightCityImages, NightCityImage } from "@/app/data";
import Modal from "@/components/Modal";

const InterceptedPhotoPage = ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const photo: NightCityImage = nightCityImages.find(
    (p) => p.id === parseInt(id)
  )!;
  return (
    <Modal>
      <div className="overflow-hidden rounded-[5px]">
        <Image
          alt="Night City"
          src={photo.src}
          priority={true}
          className="w-full h-[350px] object-cover aspect-square"
        />

        <div className="bg-white p-4">
          <h5 className="font-bold">{photo.photograph}</h5>
          <p>{photo.location}</p>
        </div>
      </div>
    </Modal>
  );
};

export default InterceptedPhotoPage;
