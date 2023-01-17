import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./styles/components/header";
import CountryList from "./styles/components/country-list";

const App = () => {
const [countries, setCountries] = useState([]);

useEffect(() => {
  const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v2/all?fields=name,region,area');
    const data = await response.json();

    setCountries(data);
  }

  fetchCountries();
}, []);

console.log('countries', countries);

  return (
    <Container>
      <Header countries={countries}/>
      <CountryList />
    </Container>
  );
}

export default App;
