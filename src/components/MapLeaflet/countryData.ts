import { CountryCode } from "@src/types/CountryCode";
import type { LatLngTuple } from "leaflet";

const { Colombia, Germany, Singapore, UnitedStates } = CountryCode;

export const countryData: { [key in CountryCode]: { coordinates: LatLngTuple; color: string } } = {
  [Colombia]: { coordinates: [4.5709, -74.2973], color: "#FFBF00" },
  [Singapore]: { coordinates: [1.3521, 103.8198], color: "green" },
  [Germany]: { coordinates: [51.1657, 10.4515], color: "red" },
  [UnitedStates]: { coordinates: [37.0902, -95.7129], color: "blue" },
};