import { forwardRef } from 'react';
import classes from './Input.module.scss';

const Input = forwardRef((props, ref) => {
    return (
        <div className={classes['form-group']}>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props} ref={ref} />
        </div>
    );
});

export default Input;
