import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART_ITEM') {
        const updatedTotalAmount =
            state.totalAmount + action.value.price * action.value.amount;
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.value.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedCartItems = [];
        if (existingCartItem) {
            let updatedCartItem = {};
            updatedCartItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.value.amount
            };
            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
        } else {
            updatedCartItems = state.items.concat(action.value);
        }
        return {
            items: updatedCartItems,
            totalAmount: updatedTotalAmount
        };
    } else if (action.type === 'REMOVE_CART_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.value
        );
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedCartItem = {};
        let updatedCartItems = {};
        if (existingCartItem) {
            if (existingCartItem.amount === 1) {
                updatedCartItems = state.items.filter(
                    item => item.id !== action.value
                );
            } else {
                updatedCartItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount - 1
                };
                updatedCartItems = [...state.items];
                updatedCartItems[existingCartItemIndex] = updatedCartItem;
            }
        }
        return {
            items: updatedCartItems,
            totalAmount: updatedTotalAmount
        };
    }
    return state;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD_CART_ITEM', value: item });
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE_CART_ITEM', value: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
