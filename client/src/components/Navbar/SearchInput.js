import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import { ItemContext } from "../ItemContext";

const SearchInput = () => {
  const { state, receiveSearchItemInfoFromServer } = useContext(ItemContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  let history = useHistory();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      fetch(`/api/searchterm?searchTerm=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          receiveSearchItemInfoFromServer(data.data);
          history.push("/search/search");
        });
    }
  };

  return (
    <Input
      type="text"
      onChange={handleSearchChange}
      onKeyDown={(ev) => handleKeyDown(ev)}
      placeholder="Type a product or company name to begin your search"
      aria-label="Search Wearable Sync Store"
    ></Input>
  );
};
const Input = styled.input`
  height: 50px;
  width: 450px;
  border-radius: 8px;
`;
export default SearchInput;
