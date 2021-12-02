import React,{ useEffect } from "react";
import { useParams } from "react-router";


//styling and icons
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

//importing header and footer components
import Footer from "./Footer";
import Header from "./Header";

//date formatter
import { format } from "date-fns"


const ConfirmationPage = () => {
  const {id} = useParams()
  let purchaseInfo = JSON.parse(window.localStorage.getItem("checkOutInfo"))
  
  useEffect(() => {
    
    return () => {
      window.localStorage.clear();
    };
    }, []);
  
  
  
  return (
    <>
      <Header />
      <Wrapper>
        <FaCheckCircle size={40} />
        <OrderReceived>We've received your order.</OrderReceived>
        <ConfirmationContainer>
          <OrderDetails>Order Details: </OrderDetails>
          <OrderNumber>
            <Paragraph>Order Number: {id}</Paragraph>
            <Paragraph>Order Date: {format(new Date(), "EEE MMM dd yyy")}</Paragraph>
            <Paragraph>Customer: {purchaseInfo.firstName}</Paragraph>
            <Paragraph>
              Please keep your order number for reference. Please allow up to 24
              hours for us to process your order for shipment.
            </Paragraph>
          </OrderNumber>
          <OrderSummary>Order Summary: </OrderSummary>
          <Paragraph>Shipping Method: Standard ground delivery (4-6 business days)</Paragraph>
          <Paragraph>Shipping Address: {purchaseInfo.address}, {purchaseInfo.city}, {purchaseInfo.province}</Paragraph>
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
