import './index.css'
import { Context } from '../../context.js';
import { useContext } from 'react';
import SearchResult from '../../components/SearchResult';

function Cart() {
    const { cartItems } = useContext(Context);
    console.log(cartItems);
    return (
        <div>
            <h2>Оформление заказа</h2>
            <p className='text'>Выбраные товары:</p>
            <div className='cart-products'>
                {cartItems.map((result) => (
                    <SearchResult result={result} key={result.id}/>
                ))}
            </div>
        </div>
    )
}

export default Cart;