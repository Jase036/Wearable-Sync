import React, { useState } from "react";
import styled from "styled-components";
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // get the search term from the db
  const limit = 20;
  let skip = 0;

  fetch(`/api/searchterm?searchTerm=${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <Input
      type="text"
      onChange={handleSearchChange}
      placeholder="Type a product or company name to begin your search"
    ></Input>
  );
};
const Input = styled.input`
  height: 50px;
  width: 150px;
  border-radius: 8px;
`;
export default SearchInput;
