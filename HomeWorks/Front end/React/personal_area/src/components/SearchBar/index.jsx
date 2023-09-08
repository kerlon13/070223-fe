import {FaSearch} from 'react-icons/fa'
import './index.css'
import { useState } from 'react'
export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState('');

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => {
            const results =json.filter((good) => {
                return (
                    value && 
                    good && 
                    good.title && 
                    good.title.toLowerCase().includes(value)
                    );
            });
            setResults(results);
        })
    }

    function handleChange(value) {
        setInput(value);
        fetchData(value)
    }


    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input 
                placeholder='Type to search' 
                value={input} 
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}