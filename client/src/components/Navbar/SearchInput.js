import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { MdClear } from "react-icons/md";
import SearchError from "../Navbar/SearchError";
// import Search from "../Search";

import { ItemContext } from "../ItemContext";
import { set } from "date-fns/esm";

const SearchInput = () => {
  const { state, receiveSearchItemInfoFromServer } = useContext(ItemContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchStatus, setSearchStatus] = useState(null);
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
          console.log(data);
          setSearchStatus(data.status);
          if (data.status !== 200) {
            history.push("/searcherror");
          } else {
            receiveSearchItemInfoFromServer(data.data);
            history.push("/search/search");
          }
        });
    }
  };

  const handleSubmit = () => {
    fetch(`/api/searchterm?searchTerm=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchStatus(data.status);
        receiveSearchItemInfoFromServer(data.data);
        history.push("/search/search");
      });
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
      <Button onClick={handleSubmit}>Search</Button>
      {/* <Search searchStatus={searchStatus} /> */}
    </Container>
  );
};

const Input = styled.input`
  height: 50px;
  width: 550px;
  border-radius: 8px;
  font-size: 20px;
  font-family: var(--font-family);
  background-color: var(--sage);
  border: solid 1px white;
  outline: none;
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
  font-size: 20px;
  font-weight: 700;
  font-family: var(--font-family);
`;
export default SearchInput;
