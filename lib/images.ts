import type { StaticImageData } from "next/image";

import oliviaCat from "@/assets/img/olivia-cat.jpg";
import oliviaCat2 from "@/assets/img/olivia-cat-2.jpg";
import luckyCat from "@/assets/img/lucky-cat.jpg";
import liliesBouquet from "@/assets/img/lilies-bouquet.jpg";
import diarioFlores from "@/assets/img/diario-flores.jpg";
import diarioFlores2 from "@/assets/img/diario-flores-2.jpg";
import letterOpen from "@/assets/img/letter-open.jpg";
import letterCard from "@/assets/img/letter-card.jpg";
import leandroLilies from "@/assets/img/leandro-lilies.jpg";
import sea from "@/assets/img/sea.jpg";
import making1 from "@/assets/img/making-1.jpg";
import making2 from "@/assets/img/making-2.jpg";
import making3 from "@/assets/img/making-3.jpg";
import making4 from "@/assets/img/making-4.jpg";
import making5 from "@/assets/img/making-5.jpg";
import making6 from "@/assets/img/making-6.jpg";
import comunidadCover from "@/assets/img/comunidad-cover.jpg";
import makingofCover from "@/assets/img/makingof-cover.jpg";
import gal1 from "@/assets/img/gal-1.jpg";
import gal2 from "@/assets/img/gal-2.jpg";
import gal3 from "@/assets/img/gal-3.jpg";
import gal4 from "@/assets/img/gal-4.jpg";
import gal5 from "@/assets/img/gal-5.jpg";
import gal6 from "@/assets/img/gal-6.jpg";
import gal7 from "@/assets/img/gal-7.jpg";
import bts1 from "@/assets/img/bts-1.jpg";
import bts2 from "@/assets/img/bts-2.jpg";
import bts3 from "@/assets/img/bts-3.jpg";
import bts4 from "@/assets/img/bts-4.jpg";
import bts5 from "@/assets/img/bts-5.jpg";
import bts6 from "@/assets/img/bts-6.jpg";
import bts7 from "@/assets/img/bts-7.jpg";
import bts8 from "@/assets/img/bts-8.jpg";
import bts9 from "@/assets/img/bts-9.jpg";
import ebookFront from "@/assets/img/ebook-front.jpg";
import ebookBack from "@/assets/img/ebook-back.jpg";
import epCover1 from "@/assets/img/ep-cover-1.jpg";
import epCover2 from "@/assets/img/ep-cover-2.jpg";
import epCover3 from "@/assets/img/ep-cover-3.jpg";
import epCover4 from "@/assets/img/ep-cover-4.jpg";
import podCover1 from "@/assets/img/pod-cover-1.jpg";
import podCover2 from "@/assets/img/pod-cover-2.jpg";
import podCover3 from "@/assets/img/pod-cover-3.jpg";
import podCover4 from "@/assets/img/pod-cover-4.jpg";
import mof1 from "@/assets/img/mof-1.jpg";
import mof2 from "@/assets/img/mof-2.jpg";
import mof3 from "@/assets/img/mof-3.jpg";
import mof4 from "@/assets/img/mof-4.jpg";
import mof5 from "@/assets/img/mof-5.jpg";
import mof6 from "@/assets/img/mof-6.jpg";
import mof7 from "@/assets/img/mof-7.jpg";
import mof8 from "@/assets/img/mof-8.jpg";
import mof9 from "@/assets/img/mof-9.jpg";
import posterOficial from "@/assets/img/poster-oficial.jpg";

export const IMG = {
  "olivia-cat": oliviaCat,
  "olivia-cat-2": oliviaCat2,
  "lucky-cat": luckyCat,
  "lilies-bouquet": liliesBouquet,
  "diario-flores": diarioFlores,
  "diario-flores-2": diarioFlores2,
  "letter-open": letterOpen,
  "letter-card": letterCard,
  "leandro-lilies": leandroLilies,
  sea,
  "making-1": making1,
  "making-2": making2,
  "making-3": making3,
  "making-4": making4,
  "making-5": making5,
  "making-6": making6,
  "comunidad-cover": comunidadCover,
  "makingof-cover": makingofCover,
  "gal-1": gal1,
  "gal-2": gal2,
  "gal-3": gal3,
  "gal-4": gal4,
  "gal-5": gal5,
  "gal-6": gal6,
  "gal-7": gal7,
  "bts-1": bts1,
  "bts-2": bts2,
  "bts-3": bts3,
  "bts-4": bts4,
  "bts-5": bts5,
  "bts-6": bts6,
  "bts-7": bts7,
  "bts-8": bts8,
  "bts-9": bts9,
  "ebook-front": ebookFront,
  "ebook-back": ebookBack,
  "ep-cover-1": epCover1,
  "ep-cover-2": epCover2,
  "ep-cover-3": epCover3,
  "ep-cover-4": epCover4,
  "pod-cover-1": podCover1,
  "pod-cover-2": podCover2,
  "pod-cover-3": podCover3,
  "pod-cover-4": podCover4,
  "mof-1": mof1,
  "mof-2": mof2,
  "mof-3": mof3,
  "mof-4": mof4,
  "mof-5": mof5,
  "mof-6": mof6,
  "mof-7": mof7,
  "mof-8": mof8,
  "mof-9": mof9,
  "poster-oficial": posterOficial,
} satisfies Record<string, StaticImageData>;

export type ImgKey = keyof typeof IMG;
