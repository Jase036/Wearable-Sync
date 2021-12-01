import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components"
import { useParams, useHistory } from "react-router-dom"
import { ItemContext } from './ItemContext';
import LoadingSpinner from './LoadingSpinner';


const ItemDetails = () => {

    // const initialState = {
    //     itemId: "",
    //     quantity: "",
    // }

    const {_id}  = useParams();
    let history = useHistory();



    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedCompany, setSelectedCompany] = useState(null)
    // const [cartDetails, setCartDetails] = useState(initialState)
    
    const { state, setLoadingState, unsetLoadingState } = useContext(ItemContext)


    // Fetch product by Id

    useEffect(() => {
        setLoadingState()
        fetch(`/api/product/${_id}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.status !== 200) {
            } else {
                setSelectedItem(data.data)
                unsetLoadingState()
            }
        })
    }, [])


    // Fetch company by the Id of the selected item 

    useEffect(() => {
        if (!selectedItem) {
            return;
        } else {
            setLoadingState()
            fetch(`/api/company/${selectedItem.companyId}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.status !== 200) {
                } else {
                    setSelectedCompany(data.data)
                    unsetLoadingState()
                }
            })
        }
    }, [selectedItem])



    // Add the item to cart 

    const addItemToCart = (_id, quantity) => {

        const fetchToCart = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ itemId: _id, quantity: quantity }),
        };

        fetch(`/api/product/${_id}`, fetchToCart)
        .then((res) => res.json())
        .then((updatedCart) => {
            const {message, cart} = updatedCart;
            if(message === "Cart Summary") {
                const prevCart = JSON.parse(localStorage.getItem("updatedCart"))

                for(let i=0; i< prevCart.length; i++) {
                    if (prevCart[i]._id === cart._id) {
                        return;
                    }
                }
                cart.numInStock -= quantity;
                prevCart.push(cart);
                localStorage.setItem("updatedCart", JSON.stringify(prevCart))
            }
        })
    }


    if (!state.hasLoaded) {
        return (
        <Wrapper>
            <LoadingSpinner />
        </Wrapper>
        ); 
        
    }else {

        return (
            <ItemWrapper>
                <ImgContainer>
                    <StyledImg src={selectedItem?.imageSrc} alt="product-image" />
                </ImgContainer>
                <SpecsWrapper>
                    <Title>{selectedItem.name}</Title>
                    <span>Best worn on: </span>
                    <span>{selectedItem.body_location}</span>
                    <p><span>Category: </span>{selectedItem.category}</p>
                    </SpecsWrapper>
                    <PriceBtnWrapper>
                        {selectedItem.numInStock > 0 ? (
                            selectedItem.numInStock && (
                                <>
                                <PriceSpan>{selectedItem.price}</PriceSpan>
                                <StyledBtn onClick={() => addItemToCart(_id)}><span>Add to Cart</span></StyledBtn>
                                </>
                                ) 
                                ) : (
                                <OutOfStock>Currently Out Of Stock</OutOfStock>
                            )
                        }
                </PriceBtnWrapper>
                <div>
                    {selectedCompany && (
                        <>
                            <a href={selectedCompany.url}>{selectedCompany.name}</a>
                            <p>{selectedCompany.country}</p>
                        </>
                    )}
                </div>
            </ItemWrapper>
        )
    }
}


const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;

`;

const ItemWrapper = styled.div`
background-color: #fff;
border-radius: 15px;
min-width: 800px;
width: 100%;
margin: auto;
box-sizing: border-box;
padding: 6rem 8rem;
display: flex;
align-items: center;
margin-top: 100px;
margin-bottom: 50px;
font-family: var(--font-family);
`;

const ImgContainer = styled.div`
box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
margin-right: 30px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;


`;

const StyledImg = styled.img`
flex: 1;
margin-right: 4rem;
padding: 50px;
`;

const SpecsWrapper = styled.div`
line-height: 1.5;
position: absolute;
top: 220px;
left: 500px;
`;

const PriceBtnWrapper = styled.div`
display: flex;
position: absolute;
top: 400px;
left: 500px;
width: 300px;
height: 50px;
text-align: center;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const PriceSpan = styled.span`
background-color: var(--dusty-rose);
width: 30%;
font-weight: bolder;
color: #FFFFFF;
padding: 10px;

`;



const StyledBtn = styled.button`
width: 70%;
padding: 10px 20px;
background-color: var(--cool-gray);
border: none;
font-weight: bolder;
color: #FFFFFF;
`;

const OutOfStock = styled.span`
width: 70%;
padding: 10px 20px;
background-color: var(--cool-gray);
opacity: 80%;
`;

const Title = styled.p`
font-weight: bolder;
`;




export default ItemDetails;



// style the add to card button later ... 

// border-radius: 4px;
// background: linear-gradient(to right, #67b26b, #4ca2cb) !important;
// border: none;
// color: #FFFFFF;
// text-align: center;
// text-transform: uppercase;
// font-size: 22px;
// padding: 20px;
// width: 200px;
// transition: all 0.4s;
// cursor: pointer;
// margin: 5px;


// & span{
// cursor: pointer;
// display: inline-block;
// position: relative;
// transition: 0.4s;
// }

// & span:after {
// content: '\00bb';
// position: absolute;
// opacity: 0;
// top: 0;
// right: -20px;
// transition: 0.5s;
// }
// &:hover span {
// padding-right: 25px;
// }
// &:hover span:after {
// opacity: 1;
// right: 0;
// } 

// `;


