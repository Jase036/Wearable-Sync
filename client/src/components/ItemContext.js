import React, { createContext, useReducer, useState, useEffect } from "react";

export const ItemContext = createContext(null);

const initialState = {
  hasLoaded: false,
  items: [],
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  categoryItems: [],
  searchItems: [],
  cart: [1],
<<<<<<< HEAD
=======
=======
  cart: [],
>>>>>>> Stashed changes
=======
  cart: [{product_id: "", quantity: 0}], 
>>>>>>> Stashed changes
  
>>>>>>> 47231f5f840ce2c7ea3817ca99df5e428d635af1
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
      }

      };
    

    case "clear-shopping-cart": {
      return {
        ...state,
        cart: [],
      };
    }

<<<<<<< Updated upstream
    case "receive-category-item-info-from-server": {
      return {
        ...state,
        categoryItems: action.categoryItems,
      };
    }

    case "receive-search-item-info-from-server": {
      return {
        ...state,
        searchItems: action.searchItems,
      };
    }
=======
    case "remove-from-shopping-cart": {
      return {
        ...state, 
        cart: action.cart,
      }
    }

>>>>>>> Stashed changes
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

  const receiveSearchItemInfoFromServer = (data) => {
    dispatch({
      type: "receive-search-item-info-from-server",
      searchItems: data,
    });
  };

  const clearPurchase = () => {
    dispatch({
      type: "clear-shopping-cart",
      cart: [],
    });
  };


<<<<<<< Updated upstream
  const addToCart = ()=>{
   dispatch({
   
    type:"add-to-shopping-cart"

   });
  }


=======
  const addPurchase = (data) => {
    let updateArray;
    if([...state.cart].filter((item) => item.product_id === data.product_id).length === 0) {
      updateArray = data
    } else {
      updateArray = [...state.cart].map((item) => {
        if(item.product_id === data.product_id) {
          item.quantity ++
        }})}
    dispatch({
      type: "add-to-shopping-cart",
      cart: [...state.cart].concat(updateArray)
      })

  }


  const removePurchase = () => {
    dispatch({
      type: "remove-from-shopping-cart",
      cart: [...state.cart].filter((item) => item._id !== state.cart.product_id)

  })
}

  


>>>>>>> Stashed changes
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
        addPurchase,
        removePurchase,
        setLoadingState,
        unsetLoadingState,
<<<<<<< HEAD
        receiveCategoryItemInfoFromServer,
        receiveSearchItemInfoFromServer,
=======
<<<<<<< Updated upstream
        receiveCategoryItemInfoFromServer
=======
        addToCart
>>>>>>> Stashed changes
>>>>>>> 47231f5f840ce2c7ea3817ca99df5e428d635af1
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
