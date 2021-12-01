import React from "react";

//styling and icons
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

//importing header and footer components
import Footer from "./Footer";
import Header from "./Header";

const ConfirmationPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <FaCheckCircle size={40} />
        <OrderReceived>We've received your order.</OrderReceived>
        <ConfirmationContainer>
          <OrderDetails>Order details - </OrderDetails>
          <p>order number: (purchaseId)</p>
          <p>order date: (new date)</p>
          <p>customer: (newpurchase.name)</p>
          <p>
            Please keep your order number for reference. Please allow up to 24
            hours for us to process your order for shipment.
          </p>
          <p>Shipping method: Standard ground delivery</p>
          <p>Shipping address: </p>
          <p>Order total: </p>
        </ConfirmationContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
  background-color: var(--dusty-rose);
  flex-direction: column;
`;

const ConfirmationContainer = styled.div`
  width: 800px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
`;

const OrderReceived = styled.h1`
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const OrderDetails = styled.h2`
  padding-bottom: 20px;
`;

export default ConfirmationPage;
