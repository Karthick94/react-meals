import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.scss';
import CartContext from '../../store/cart-context';

const MealItem = props => {
    const { id, name, description, price } = props;
    const cartCtx = useContext(CartContext);
    let itemPrice = `$${price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: id,
            name: name,
            price: price,
            amount: amount
        });
    };

    return (
        <li className={classes['meal-item']}>
            <div>
                <h3 className={classes.name}>{name}</h3>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>{itemPrice}</p>
            </div>
            <MealItemForm id={id} addToCartHandler={addToCartHandler} />
        </li>
    );
};

export default MealItem;
