import Link from "next/link";

import Card from "@/components/Card";
import { nightCityImages } from "./data";

const PhotoGallery = () => {
  return (
    <div className="container px-3">
      <h1 className="text-center font-bold text-4xl mb-3">
        Night City Photo Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
        {nightCityImages.map(({ id, src, photograph, location }) => {
          return (
            <Link key={id} href={`/${id}`}>
              <Card
                id={id}
                src={src}
                photograph={photograph}
                location={location}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
