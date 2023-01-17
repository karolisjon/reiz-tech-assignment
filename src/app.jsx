import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

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
    <Typography>test</Typography>
  );
}

export default App;
