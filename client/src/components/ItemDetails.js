import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useParams, useHistory } from "react-router-dom"


const ItemDetails = () => {

    const {_id}  = useParams();

    const [item, setItem] = useState(null)
    const [companies, setCompanies] = useState(null)

    useEffect(() => {
        fetch(`/api/product/${_id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setItem(data.data)
        })
        .catch((error) => {
            console.error("Error:", error)
        })
    }, [])

    useEffect(() => {
        fetch('/api/all-companies')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
                setCompanies(data.data)
        })
        .catch((error) => {
            console.error("Error:", error)
        })
    }, [])

    //****************** add item to cart****************************/

    // const addToCart = (productId) => {
    //     fetch("/user/buy", {
    //         method: "PATCH",
    //         body: JSON.stringify({ operation: "add", productId}),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //     .then((res) => {
    //         if (res.ok) {
    //             getUserData(); // get user to signin 
    //         }
    //     })
    //     .catch((error) => console.log(error))
    // }

    //************************************************************/

    const company = companies.find((company) => company._id === item.companyId) 
    console.log(company)


    return (
        <div>
            <div>
                <img src={item.imageSrc} />
            </div>
            <div>
                <p>{item.name}</p>
                {company && (
                    <>
                    <div>
                        <p>{company.name}</p>
                        <p>{company.url}</p>
                        <p>{company.country}</p>
                    </div>
                    </>
                )}
            </div>
            <div>
                <p>Best worn on:</p>
                <span>{item.body_location}</span>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <div>
                    {item.numInStock > 0 ? (
                        item.numInStock && (
                            <button>Add to Cart</button> /// onClick={() => addToCart(item._id)}
                        ) 
                        ) : (
                            <span>Currently Out Of Stock</span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetails
