import React, { useState} from "react";

//styling
import styled from "styled-components";







const CheckOutForm = () => {

const [clientInfo, setClientInfo] = useState();


const getInfo = () =>{



}




const handleSubmit = (ev) => {


    ev.preventDefault();
   
    fetch ("/api/add-new-purchase" ,{
       method:"POST", 
       headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
       },
       body : JSON.stringify(clientInfo)
     //the keys in frontend has to match the backend 
      })
      .then((res)=>res.json())
      .then((data)=>{
     
       // console.log(data)
       if (data.status === 200) {
         window.localStorage.setItem(
           "reservationInfo",
           JSON.stringify(data.data)
         );
       //   history.push("/confirmed");
       } else if (data.status === 500) {
         window.alert("This seat is already booked");
       }
       else {
         window.alert("something went wrong!");
       }
     });
   
   
   }

  return (
    <div>
        <p>Shipping Info:</p>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" onChange={getInfo} placeholder="First Name" required></input>
        </label>
        <label>
          Last Name:
          <input type="text" onChange={getInfo} placeholder="Last Name" required></input>
        </label>
        <label>
          Phone Number:
          <input type="number" onChange={getInfo} placeholder="Phone Number" required></input>
        </label>
        <label>
          email:
          <input type="email" onChange={getInfo} placeholder="Last Name" required></input>
        </label>
        <label>
          Address:
          <input type="text" onChange={getInfo} placeholder="Address" required></input>
        </label>
        <label>
          City
          <input type="text" onChange={getInfo} placeholder="City" required></input>
        </label>
        <label>
          Postal Code
          <input type="text" onChange={getInfo} placeholder="postal code" required></input>
        </label>
        <label>
          <select>
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
        <label >
          Credit card:
          <input onChange={getInfo} type="text" placeholder="card number" required></input>
        </label>
        <label >
          Expiry:
          <input onChange={getInfo} type="text" placeholder="MM"   name="month" maxlength="2" size="2" required></input><span>/</span>
          <input type="text" name="year" placeholder="YY" maxlength="2" size="2" />
        </label>
      </form>
      <Submit type="submit">Submit</Submit>
    </div>
  );
};

export default CheckOutForm;


const Submit = styled.button`
display:block;
margin:auto;
height:70px;
font-siz:10px;
`