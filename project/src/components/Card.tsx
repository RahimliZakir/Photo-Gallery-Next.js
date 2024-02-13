import Image from "next/image";

import { NightCityImage } from "@/app/data";

const Card = ({ id, src, location, photograph }: NightCityImage) => {
  return (
    <div className="border rounded-[5px] overflow-hidden hover:-translate-y-5 duration-300">
      <Image
        src={src}
        alt="Night City"
        priority={true}
        className="object-cover w-full h-[250px]"
      />
      <div className="p-3">
        <h5 className="font-bold">{photograph}</h5>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
