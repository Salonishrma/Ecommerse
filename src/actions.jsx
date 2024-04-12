export const addToCart = (product, quantity) => {
    return {
      type: "ADD_TO_CART",
      payload: {
        product,
        quantity
      },
    };
};

export const removeFromCart = (index) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: index,
    };
};