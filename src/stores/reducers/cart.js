import {
    CART_ADD
} from '../actions/cart';

const initialState = {
    cart: [],
};

const REDUCER_CART = (prevState = initialState, action) => {
    switch (action.type) {
        case CART_ADD:
            return {
                ...prevState,
                cart: action.cart
            };
        default:
            return prevState;
    }
}
export default REDUCER_CART;