import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';
// import classes from './App.module.scss';

function App() {
    const [isCartShown, setIsCartShown] = useState(false);
    const showCartHandler = () => {
        setIsCartShown(true);
    };
    const hideCartHandler = () => {
        setIsCartShown(false);
    };

    return (
        <CartProvider>
            {isCartShown && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
