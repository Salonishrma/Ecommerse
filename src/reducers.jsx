const storedCart = JSON.parse(localStorage.getItem('cart'));

const initialState = {
    cart: storedCart ? storedCart : [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const addToCartUpdatedCart = [...state.cart, action.payload];
            localStorage.setItem('cart', JSON.stringify(addToCartUpdatedCart));
            return {
                ...state,
                cart: addToCartUpdatedCart,
            };
        
        case 'REMOVE_FROM_CART':
            const removeFromCartUpdatedCart = state.cart.filter((item, index) => index !== action.payload);
            localStorage.setItem('cart', JSON.stringify(removeFromCartUpdatedCart));
            return {
                ...state,
                cart: removeFromCartUpdatedCart,
            };
        
        case 'CLEAR_CART':
            localStorage.removeItem('cart');
            return {
                ...state,
                cart: [],
            };

        default:
            return state;
    }
};

export default rootReducer;
