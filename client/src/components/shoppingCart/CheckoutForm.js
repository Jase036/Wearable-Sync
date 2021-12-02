import Address from "ipaddr.js";
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

//styling
import styled from "styled-components";
import checkOut from "../../assets/checkOut.jpg";

// there are 2 piece of info with quantity, productId:""

const CheckOutForm = () => {
  
  let year = new Date().getYear().toString()
  let currentYear = Number(year.substring(1))


  let month = new Date().getMonth();
  let currentMonth = month + 1
  
  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    province: "",
    creditCardNum: "",
    expiryM: "",
    expiryY: "",
  });

  const { user, isAuthenticated, isLoading } = useAuth0();

  const getInfo = (ev) => {
    setClientInfo({ ...clientInfo, [ev.target.id]: ev.target.value });

 

  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if(clientInfo.expiryY < currentYear && clientInfo.expiryM < currentMonth){ window.alert("your card is expired") }

    fetch("/api/add-new-purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(clientInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.status !== 200) {
          return <h1>please fill the missing info</h1>;
        } else {
          JSON.stringify(data.data);
          //   history.push("/confirmed")
        }
      });
  };

  return (
    <Wrapper>
      <Title>Shipping Info</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          First Name:
          <Input
            type="text"
            onChange={getInfo}
            id="firstName"
            value={isAuthenticated ? user.given_name : clientInfo.firstName}
            placeholder="First Name"
            required
          ></Input>
        </Label>
        <Label>
          Last Name:
          <Input
            type="text"
            onChange={getInfo}
            id="lastName"
            value={isAuthenticated ? user.family_name : clientInfo.lastName}
            placeholder="Last Name"
            required
          ></Input>
        </Label>
        <Label>
          Phone Number:
          <Input
            type="tel"
            value={clientInfo.phoneNum}
            id="phoneNum"
            onChange={getInfo}
            placeholder="Phone Number"
            required
          ></Input>
        </Label>
        <Label>
          email:
          <Input
            type="email"
            value={isAuthenticated ? user.email : clientInfo.email}
            id="email"
            onChange={getInfo}
            placeholder="Last Name"
            required
          ></Input>
        </Label>
        <Label>
          Address:
          <Input
            type="text"
            value={clientInfo.address}
            id="address"
            onChange={getInfo}
            placeholder="Address"
            required
          ></Input>
        </Label>
        <Label>
          City:
          <Input
            type="text"
            value={clientInfo.city}
            id="city"
            onChange={getInfo}
            placeholder="City"
            required
          ></Input>
        </Label>
        <Label>
          Postal Code:
          <Input
            type="text"
            value={clientInfo.postalCode}
            id="postalCode"
            onChange={getInfo}
            placeholder="postal code"
            required
          ></Input>
        </Label>
        <Label>
          <Select
            onChange={getInfo}
            value={clientInfo.province}
            id="province"
            required
          >
            <option value disabled selected>
              Province
            </option>
            <option value="AB">Alberta</option>
            <option value="BC">British Colombia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="NU">Nunavut</option>
            <option value="ON">Ontario</option>
            <option value="PEI">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="YT">Yukon</option>
          </Select>
        </Label>
        <Label>
          Credit card:
          <Input
            value={clientInfo.creditCardNum}
            id="creditCardNum"
            onChange={getInfo}
            type="text"
            placeholder="card number"
            required
          ></Input>
        </Label>
        <Label>
          Expiry:
          <Expiry
            value={clientInfo.expiryM}
            id="expiryM"
            onChange={getInfo}
            type="text"
            placeholder="MM"
            name="month"
            maxLength="2"
            size="2"
            required
          />
          <span> /</span>
          <Expiry
            value={clientInfo.expiryY}
            id="expiryY"
            onChange={getInfo}
            type="text"
            name="year"
            placeholder="YY"
            maxLength="2"
            size="2"
            required
          />
        </Label>
        <Submit type="submit">Submit</Submit>
      </Form>
    </Wrapper>
  );
};

export default CheckOutForm;


const Select = styled.select`

border:none;


`

const Expiry = styled.input`
border: 0;
margin-left: 10px;
font-size:15px;
padding:5px;
`


const Input =styled.input`
margin-left: 10px;
width: 170px;
border: 0;
height:20px;
padding:10px;
font-size:15px;
border-radius:5px;
`


const Label = styled.label`
font-family: var(--font-family);
padding:10px;
font-weight:bold;
`

const Title = styled.h1`
text-align:right;
margin-right:360px;
padding:50px 0px;
font-family: var(--font-family);
font-size:40px;

`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;
  align-items: flex-end;
  margin-right:350px;
`;

const Wrapper = styled.div`
  background-image: url(${checkOut});
  min-height: 100vh;
  background-size: cover;
`;

const Submit = styled.button`
  height: 50px;
  font-siz: 10px;
  width: 200px;
  margin:20px 10px;
  border-radius:10px;
  font-size:18px;
  font-weight:bold;
  border:none;
  color:white;
  background-color: var(--cool-gray);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 400ms ease; 
  cursor:pointer;

  &:hover{
   
    background-color: var(--dusty-rose);
    box-shadow:none;
    color:#616060;
  }
`;
