import {FaSearch} from 'react-icons/fa'
import './index.css'

export const SearchBar = ({input, setInput}) => {

    function handleChange(value) {
        setInput(value);
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