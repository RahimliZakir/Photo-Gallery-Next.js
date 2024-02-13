import Image from "next/image";
import Link from "next/link";

import { NightCityImage } from "@/app/photo-gallery/data";

const Card = ({ id, src, location, photograph }: NightCityImage) => {
  return (
    <div className="border rounded-[5px] overflow-hidden hover:-translate-y-5 duration-300">
      <Link href={`/photo-gallery/${id}`}>
        <Image src={src} alt="Night City" className="object-cover h-[250px]" />
        <div className="p-3">
          <h5 className="font-bold">{photograph}</h5>
          <p>{location}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
