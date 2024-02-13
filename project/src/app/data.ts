import { StaticImageData } from "next/image";
import First from "./imgs/lf-franciz-wIZpOCdTb8I-unsplash.webp";
import Second from "./imgs/valery-rabchenyuk-nRVn-_k1uMI-unsplash.webp";
import Third from "./imgs/jezael-melgoza-7H77FWkK_x4-unsplash.webp";
import Fourth from "./imgs/designecologist-QYuj03G6uEg-unsplash.webp";
import Fifth from "./imgs/kevin-nalty-TI1mH4-wNxE-unsplash.webp";
import Sixth from "./imgs/kirk-thornton-tyI9YDMu9Bc-unsplash.webp";
import Seventh from "./imgs/jase-bloor-oCZHIa1D4EU-unsplash.webp";
import Eighth from "./imgs/thomas-lardeau-GTBHnBBPhS8-unsplash.webp";

export type NightCityImage = {
  id: number;
  src: StaticImageData;
  location: string;
  photograph: string;
};

export const nightCityImages: NightCityImage[] = [
  {
    id: 1,
    src: First,
    location: "Night city, Hong kong",
    photograph: "lf.Franciz !!!",
  },
  {
    id: 2,
    src: Second,
    location: "Seoul, South Korea",
    photograph: "Valery Rabchenyuk",
  },
  {
    id: 3,
    src: Third,
    location: "Tokyo Tower, Minato-ku, Japan",
    photograph: "Jezael Melgoza",
  },
  {
    id: 4,
    src: Fourth,
    location: "Toronto, ON, Canada",
    photograph: "DESIGNECOLOGIST",
  },
  {
    id: 5,
    src: Fifth,
    location: "Minneapolis, MN, USA",
    photograph: "Kevin Nalty",
  },
  {
    id: 6,
    src: Sixth,
    location: "St. Louis, MO, USA",
    photograph: "Kirk Thornton",
  },
  {
    id: 7,
    src: Seventh,
    location: "Kyoto, Japan",
    photograph: "Jase Bloor",
  },
  {
    id: 8,
    src: Eighth,
    location: "Montréal, QC, Canada",
    photograph: "Thomas Lardeau",
  },
];
