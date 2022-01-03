import { useContext } from 'react';
import Model from '../UI/Model';
import classes from './Cart.module.scss';
import CartItem from './CartItem';
import CartContext from '../store/cart-context';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItemsInCart = cartCtx.items.length > 0;

    const removeFromCartHandler = id => {
        cartCtx.removeItem(id);
    };

    const addToCartHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItem = cartCtx.items.map(item => {
        const totalAmountPerItem = (item.amount * item.price).toFixed(2);
        return (
            <li key={item.id}>
                <CartItem
                    {...item}
                    totalAmountPerItem={totalAmountPerItem}
                    onAddToCart={addToCartHandler.bind(null, item)}
                    onRemoveFromCart={removeFromCartHandler.bind(null, item.id)}
                />
            </li>
        );
    });
    return (
        <Model onClose={props.onHideCart}>
            <div className={classes.cart}>
                <ul>{cartItem}</ul>
                <div className={classes.content}>
                    <p>Total Amount</p>
                    <p>{totalAmount}</p>
                </div>
                <div className={classes.footer}>
                    <button onClick={props.onHideCart}>Close</button>
                    {hasItemsInCart && <button>Order</button>}
                </div>
            </div>
        </Model>
    );
};

export default Cart;
