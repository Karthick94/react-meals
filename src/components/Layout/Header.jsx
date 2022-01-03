import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.scss';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.container}>
                    <button className={classes.logo}>RM</button>
                    <HeaderCartButton onClick={props.onShowCart} />
                </div>
            </header>
            <div className={classes['header-bg']}></div>
        </Fragment>
    );
};

export default Header;
