/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((arr, cur) => {
    if (!arr.map((cities) => cities.country).includes(cur.country)) {
      return [...arr, { country: cur.country, emoji: cur.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={cities.id} />
      ))}
    </ul>
  );
}

export default CityList;
