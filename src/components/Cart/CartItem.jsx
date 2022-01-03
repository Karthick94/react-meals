import classes from './CartItem.module.scss';

const CartItem = props => {
    const {
        name,
        amount,
        price,
        totalAmountPerItem,
        onAddToCart,
        onRemoveFromCart
    } = props;
    const itemPrice = `$${price.toFixed(2)}`;
    return (
        <div className={classes['cart-item']}>
            <div className={classes['item-left']}>
                <h3 className={classes.name}>{name}</h3>
                <div className={classes['content-left']}>
                    <p className={classes.price}>{itemPrice}</p>
                    <p className={classes.amount}>x {amount}</p>
                </div>
            </div>
            <div className={classes['item-right']}>
                <div className={classes['cart-actions']}>
                    <button
                        onClick={onRemoveFromCart}
                        className={classes['remove-item']}
                    >
                        -
                    </button>
                    <button
                        onClick={onAddToCart}
                        className={classes['add-item']}
                    >
                        +
                    </button>
                </div>
                <p className={classes['item-amount-price']}>
                    ${totalAmountPerItem}
                </p>
            </div>
        </div>
    );
};

export default CartItem;
