"https://restcountries.com/v2/name/${country}?fields=name,capital,region,subregion,borders,flag&fullText=true";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryDetails as CountryDetailsType } from "./CountryDetails.types";
import styles from "./CountryDetails.module.css";

import Hello from "./Flag/Button";

const CountryDetails = () => {
  const { countryName } = useParams();

  const [countriesDetails, setCountriesDetails] =
    useState<CountryDetailsType>();

  useEffect(() => {
    fetch(
      `https://restcountries.com/v2/name/${countryName}?fields=name,capital,population,region,subregion,borders,flag&fullText=true`
    )
      .then((response) => response.json())
      .then((data) => setCountriesDetails(data[0]));
  }, [countryName]);

  if (countriesDetails) {
    return (
      <>
        <div className={styles.header}>
          {countriesDetails.name}
          <Hello />
        </div>

        <div className={styles.container}>
          <div>
            <img className={styles.flag} src={countriesDetails.flag} />
          </div>
          <div className={styles.subcontainer}>
            <br />
            <br />
            <div>
              <strong>Region: </strong> {countriesDetails.region}
            </div>
            <br />
            <br />
            <div>
              <strong>Capital: </strong> {countriesDetails.capital}
            </div>
            <br />
            <br />
            <div>
              <strong>Sub-region: </strong> {countriesDetails.subregion}
            </div>
            <br />
            <br />
            <div>
              <strong>Population: </strong> {countriesDetails.population}
            </div>
            <br />
            <br />
          </div>
        </div>
      </>
    );
  } else {
    return <p>No Country</p>;
  }
};

export default CountryDetails;
