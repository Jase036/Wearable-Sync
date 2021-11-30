import React, { createContext, useReducer, useState, useEffect } from 'react'

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
        case 'set-loading-state': {
            return {
                ...state, 
                hasLoaded: action.hasLoaded
                
            }
        }
        case 'unset-loading-state': {
            return {
                ...state, 
                hasLoaded: action.hasLoaded
                
            }
        }
        default: 
            throw new Error(`Unrecognized action: ${action.type}`)
    }
}


export const ItemProvider = ({ children }) => {
    const [paginationIndex, setPaginationIndex] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    const receiveItemInfoFromServer = (data) => {
        console.log(data)
        
        dispatch({
            type: "receive-item-info-from-server",
            items: [...state.items].concat(data)
        })
    }

    const setLoadingState = () => {
        
        dispatch({
            type: "set-loading-state",
            hasLoaded: false
        })
    }

    const unsetLoadingState = () => {
        
        dispatch({
            type: "unset-loading-state",
            hasLoaded: true
        })
    }

    useEffect(() => {
        const limit=20;
        let skip= 20 * paginationIndex;
            
        setLoadingState()
        fetch(`/api/all-products?skip=${skip}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
            if (data.status !== 200) {
                console.log(data)  
            } else {
                receiveItemInfoFromServer(data.data);
                unsetLoadingState()}});
        }, [paginationIndex]); // We want the fetch to run when the paginationIndex changes
    
        
        
    return (
            <ItemContext.Provider value={{
                state,
                receiveItemInfoFromServer,
                paginationIndex,
                setPaginationIndex,
                }}
            >
                {children}
            </ItemContext.Provider>
    )
}

