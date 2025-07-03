import { atom } from "jotai";
import { loadable } from "jotai/utils";

const asyncCovidCountryDataAtom = atom(async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/countries");
  const data = await res.json();
  return data;
});

export const loadableCovidCountryDataAtomAtom = loadable(
  asyncCovidCountryDataAtom
);
