import React, { createContext, useReducer, useState, useEffect } from "react";

export const ItemContext = createContext(null);

const initialState = {
  hasLoaded: false,
  items: [],
<<<<<<< Updated upstream
  categoryItems: [],
  cart: [1],
=======
  cart: [],
>>>>>>> Stashed changes
  
};

function reducer(state, action) {
  switch (action.type) {
    case "receive-item-info-from-server": {
      return {
        ...state,
        hasLoaded: true,
        items: action.items,
      };
    }
    case "set-loading-state": {
      return {
        ...state,
        hasLoaded: action.hasLoaded,
      };
    }
    case "unset-loading-state": {
      return {
        ...state,
        hasLoaded: action.hasLoaded,
      };
    }

    case "add-to-shopping-cart": {
      return {
        ...state,
        cart: action.cart,
      };
    }

    case "clear-shopping-cart": {
      return {
        ...state,
        cart: [],
      };
    }
    case "receive-category-item-info-from-server": {
      return {
        ...state,
        categoryItems: action.categoryItems,
      };
    }

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
}

export const ItemProvider = ({ children }) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

 

  //the item fetch dispatch function set up for pagination. The existing array is duplicated with spread and the concatenated with the new incoming data.
  const receiveItemInfoFromServer = (data) => {
    dispatch({
      type: "receive-item-info-from-server",
      items: [...state.items].concat(data),
    });
  };
  const receiveCategoryItemInfoFromServer = (data) => {
    dispatch({
      type: "receive-category-item-info-from-server",
      categoryItems: [...state.categoryItems].concat(data),
    });
  };

  const clearPurchase = () => {
    dispatch({
      type: "clear-shopping-cart",
    });
  };


  const addToCart = ()=>{
   dispatch({
   
    type:"add-to-shopping-cart"

   });
  }


  //Loading state will allow us to use a loading component during async operations in other components
  const setLoadingState = () => {
    dispatch({
      type: "set-loading-state",
      hasLoaded: false,
    });
  };

  //revert loading state to true when async operations are done
  const unsetLoadingState = () => {
    dispatch({
      type: "unset-loading-state",
      hasLoaded: true,
    });
  };


  //We load the items from DB using pagination
  useEffect(() => {
    const limit = 20;
    let skip = 20 * paginationIndex;

    setLoadingState();
    fetch(`/api/all-products?skip=${skip}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          console.log(data);
        } else {
            console.log(data);
          receiveItemInfoFromServer(data.data);
          unsetLoadingState();
        }
      });
  }, [paginationIndex]); // We want the fetch to run when the paginationIndex changes

  return (
    <ItemContext.Provider
      value={{
        state,
        receiveItemInfoFromServer,
        paginationIndex,
        setPaginationIndex,
        clearPurchase,
        setLoadingState,
        unsetLoadingState,
<<<<<<< Updated upstream
        receiveCategoryItemInfoFromServer
=======
        addToCart
>>>>>>> Stashed changes
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
