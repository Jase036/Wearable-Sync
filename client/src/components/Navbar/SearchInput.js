import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { MdClear } from "react-icons/md";

import { ItemContext } from "../ItemContext";
import { set } from "date-fns/esm";

const SearchInput = () => {
  const { state, receiveSearchItemInfoFromServer } = useContext(ItemContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  let history = useHistory();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClear = () => {
    setSearchTerm("");
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
    <Container>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={(ev) => handleKeyDown(ev)}
        placeholder="Type a product or company name to begin your search"
        aria-label="Search Wearable Sync Store"
      ></Input>
      <Button onClick={handleClear}>Clear</Button>
      <Button onClick={handleKeyDown}>Submit</Button>
    </Container>
  );
};
const Input = styled.input`
  height: 50px;
  width: 450px;
  border-radius: 8px;
  font-size: 15px;
  font-family: var(--font-family);
  background-color: var(--sage);
  border: solid 1px white;
`;
const Container = styled.div`
  background: none;
  border: none;
`;
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  font-family: var(--font-family);
`;
export default SearchInput;
