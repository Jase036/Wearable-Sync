import React from "react";

//styling and icons
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

//importing header and footer components
import Footer from "./Footer";
import Header from "./Header";

//date formatter
import {format} from "date-fns"

const ConfirmationPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <FaCheckCircle size={40} />
        <OrderReceived>We've received your order.</OrderReceived>
        <ConfirmationContainer>
          <OrderDetails>Order Details: </OrderDetails>
          <OrderNumber>
            <Paragraph>order number: (purchaseId)</Paragraph>
            <Paragraph>order date: {format(new Date(), "EEE MMM dd yyy")}</Paragraph>
            <Paragraph>customer: (newpurchase.name)</Paragraph>
            <Paragraph>
              Please keep your order number for reference. Please allow up to 24
              hours for us to process your order for shipment.
            </Paragraph>
          </OrderNumber>
          <OrderSummary>Order Summary: </OrderSummary>
          <Paragraph>Shipping method: Standard ground delivery (4-6 business days)</Paragraph>
          <Paragraph>Shipping address: </Paragraph>
          <Paragraph>Order total: </Paragraph>
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
  width: 900px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  padding-left: 20px;
`;

const OrderReceived = styled.h1`
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const OrderDetails = styled.h2`
  padding: 20px 0px;
`;

const OrderNumber = styled.div`
  border-bottom: 2px solid gray;
`;

const Paragraph = styled.p`
  padding: 5px 0px;
`;
const OrderSummary = styled.h2`
  padding: 20px 0px;
`;
export default ConfirmationPage;
