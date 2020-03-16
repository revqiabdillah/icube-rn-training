export const CART_ADD = '[CART].ADD';

export default {
    add: (cart) => {
        return {
            type: CART_ADD,
            cart: cart
        }
    }
}