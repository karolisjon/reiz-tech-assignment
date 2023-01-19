import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/header";
import CountryTable from "./components/country-table";

const pageSize = 10;

const App = () => {
  const [countries, setCountries] = useState([]);
  const [pagination, setPagination] = React.useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  const fetchAllCountries = async ({ from, to }) => {
    const response = await fetch('https://restcountries.com/v2/all?fields=name,region,area');
    const data = await response.json();

    const countriesPerPage = data.slice(from, to);

    const dataObj = {
      count: data.length,
      countries: countriesPerPage,
    };

    return dataObj;
  };

  const handlePageChange = (_, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to })
  };

  useEffect(() => {
    fetchAllCountries({
      from: pagination.from,
      to: pagination.to
    }).then(res => {
      setCountries(res.countries);
      setPagination({ ...pagination, count: res.count });
    })

  }, [pagination.from, pagination.to]);

  return (
    <Container maxWidth='md'>
      <Header countries={countries} />
      <CountryTable
        countries={countries}
        handlePageChange={handlePageChange}
        pagination={pagination}
        pageSize={pageSize}
      />
    </Container>
  );
}

export default App;
