import { BUAH_DATA } from "./BuahData";
import { BUMBU_DATA } from "./BumbuData";
import { LAUK_DATA } from "./LaukData";
import { SAYUR_DATA } from "./SayurData";

export const ALL_PRODUCTS = [
  ...SAYUR_DATA,
  ...BUAH_DATA,
  ...BUMBU_DATA,
  ...LAUK_DATA,
];
