import { memo, useContext } from "react";
import "./index.css"
import { Context } from "../../context";

const SearchResult = ({result}) => {
    const { addToCart, removeFromCart } = useContext(Context);
    
    return (
        <div className="search-result">
            <p>{result.title}</p>
            <img src={result.url}/>
            <div className="search-btns-wrapper">
                <button onClick={() => addToCart(result)}>+</button>
                <button onClick={() => removeFromCart(result)}>-</button>
            </div>
        </div>
    );
}

export default memo(SearchResult);