import React, { createContext, useReducer } from 'react'

export const ItemContext = createContext(null);

const initialState = {
    hasLoaded: false, 
    items: [], 
    category: null, 
    price: null, 
    companies: null, 
    inStock: null, 
};

function reducer (state, action) {
    switch(action.type) {
        case 'receive-item-info-from-server': {
            return {
                ...state, 
                hasLoaded: true,
                items: action.items, 
                price: action.price,
                category: action.category,
                companies: action.companies,
                inStock: action.setInStock,
            }
        }
        default: 
            throw new Error(`Unrecognized action: ${action.type}`)
    }
}


export const ItemProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const receiveItemInfoFromServer = (data) => {
        console.log(data)
        
        dispatch({
            type: "receive-item-info-from-server",
            items: [...data]
        })
    }


    return (
            <ItemContext.Provider value={{
                state,
                receiveItemInfoFromServer,
                }}
            >
                {children}
            </ItemContext.Provider>
    )
}

