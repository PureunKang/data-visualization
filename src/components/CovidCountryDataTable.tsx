import { useAtom } from "jotai";
import React from "react";
import { loadableCovidCountryDataAtomAtom } from "../atoms/covidCountryDataAtom";

const CovidCountryDataTable = () => {
  const [value] = useAtom(loadableCovidCountryDataAtomAtom);
  if (value.state === "hasError") return <div>{value.error}</div>;
  if (value.state === "loading") {
    return <div>Loading...</div>;
  }
  console.log(value.data);
  return <div>CovidCountryDataTable</div>;
};

export default CovidCountryDataTable;
