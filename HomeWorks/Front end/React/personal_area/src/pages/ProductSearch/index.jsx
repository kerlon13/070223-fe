import { SearchBar } from '../../components/SearchBar';
import './index.css'
import { useState, useEffect, useContext } from 'react'
import { SearchResultList } from '../../components/SearchResultList';

function ProductSearch() {
    
    const [goods, setGoods] = useState([]);
    const [input, setInput] = useState('');
    

    const getGoods = async () => {
        await fetch('https://jsonplaceholder.typicode.com/photos')
          .then(response => response.json())
          .then(data => {
            setGoods((prevState) => {
                return [...prevState, ...data];
            })
        })      
    }

    useEffect(() => {
        getGoods()
    }, []);

    return (
        <div>
        <div className='search-bar-container'>
            <SearchBar setGoods={setGoods} goods={goods} input={input} setInput={setInput}/>
            
        </div>
        {goods && goods.length > 0 && <SearchResultList goods={goods} input={input} />}
        </div>
    );
}

export default ProductSearch;