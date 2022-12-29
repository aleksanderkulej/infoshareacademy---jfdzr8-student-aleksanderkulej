import { useState } from "react";
import { useEffect } from "react";
import { Country } from "./Countries.types";
import CountriesItem from "./CountriesItem";
import styles from "./Countries.module.css";

const countriesAPIUrl =
  "https://restcountries.com/v2/all?fields=name,capital,flag,population,regions";

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,flag,population,regions"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div className={styles.root}>
        {countries.map((country) => {
          return (
            <CountriesItem
              key={country.name}
              flag={country.flag}
              name={country.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default Countries;
