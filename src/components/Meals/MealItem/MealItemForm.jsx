import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.scss';

const MealItemForm = props => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const addAmountRef = useRef();

    const addAmountHandler = e => {
        e.preventDefault();
        const enteredAmount = addAmountRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setIsAmountValid(false);
            return;
        }
        setIsAmountValid(true);
        props.addToCartHandler(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={addAmountHandler}>
            <Input
                ref={addAmountRef}
                label="Amount"
                id={`amount_${props.id}`}
                type="number"
                defaultValue="0"
                min="0"
                max="5"
                step="1"
            />
            <button>+ Add</button>
            {!isAmountValid && (
                <p className={classes.error}>
                    Entered amount should be valid (1 -5)
                </p>
            )}
        </form>
    );
};

export default MealItemForm;
