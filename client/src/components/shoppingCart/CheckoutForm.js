import Address from "ipaddr.js";
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

//styling
import styled from "styled-components";

// there are 2 piece of info with quantity, productId:""

const CheckOutForm = () => {
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
          return(<h1>please fill the missing info</h1>)
        } else {
          JSON.stringify(data.data);
          //   history.push("/confirmed")
        }
      });
  };

  return (
    <div>
      <p>Shipping Info:</p>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            onChange={getInfo}
            id="firstName"
            value={isAuthenticated? user.given_name:clientInfo.firstName}
            placeholder="First Name"
            required
          ></input>
        </label>
        <label>
          Last Name:
          <input
            type="text"
            onChange={getInfo}
            id="lastName"
            value={isAuthenticated? user.family_name: clientInfo.lastName}
            placeholder="Last Name"
            required
          ></input>
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={clientInfo.phoneNum}
            id="phoneNum"
            onChange={getInfo}
            placeholder="Phone Number"
            required
          ></input>
        </label>
        <label>
          email:
          <input
            type="email"
            value={isAuthenticated? user.email: clientInfo.email}
            id="email"
            onChange={getInfo}
            placeholder="Last Name"
            required
          ></input>
        </label>
        <label>
          Address:
          <input
            type="text"
            value={clientInfo.address}
            id="address"
            onChange={getInfo}
            placeholder="Address"
            required
          ></input>
        </label>
        <label>
          City
          <input
            type="text"
            value={clientInfo.city}
            id="city"
            onChange={getInfo}
            placeholder="City"
            required
          ></input>
        </label>
        <label>
          Postal Code
          <input
            type="text"
            value={clientInfo.postalCode}
            id="postalCode"
            onChange={getInfo}
            placeholder="postal code"
            required
          ></input>
        </label>
        <label>
          <select
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
          </select>
        </label>
        <label>
          Credit card:
          <input
            value={clientInfo.creditCardNum}
            id="creditCardNum"
            onChange={getInfo}
            type="text"
            placeholder="card number"
            required
          ></input>
        </label>
        <label>
          Expiry:
          <input
            value={clientInfo.expiryM}
            id="expiryM"
            onChange={getInfo}
            type="text"
            placeholder="MM"
            name="month"
            maxLength="2"
            size="2"
            required
          ></input>
          <span>/</span>
          <input
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
        </label>
      </form>
      \<Submit type="submit">Submit</Submit>
    </div>
  );
};

export default CheckOutForm;

const Submit = styled.button`
  display: block;
  margin: auto;
  height: 70px;
  font-siz: 10px;
`;
