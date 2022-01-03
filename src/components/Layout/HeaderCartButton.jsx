import { useContext, useState, useEffect } from 'react';
import classes from './HeaderCartButton.module.scss';
import CartContext from '../store/cart-context';

const HeaderCartButton = props => {
    const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = items.reduce(
        (curAmount, item) => curAmount + item.amount,
        0
    );
    const cartBtnClass = `${classes['cart-button']} ${
        isBtnHighlighted && classes.bump
    }`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsBtnHighlighted(true);
        const timer = setTimeout(() => {
            setIsBtnHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);
    return (
        <button className={cartBtnClass} onClick={props.onClick}>
            <div>
                <span className={classes.icon}>
                    <i className="fas fa-shopping-cart fa-2x"></i>
                </span>
                <span className={classes.label}>Your Cart</span>
                <span className={classes['items-count']}>
                    {numberOfCartItems}
                </span>
            </div>
        </button>
    );
};

export default HeaderCartButton;
