import { useState } from "react";
import "./index.css"
export const SearchResult = ({result}) => {
    
    const [count, setCount] = useState(0);
    
    return (
        <div className="search-result">
            <p>{result.title}</p>
            <img src={result.url}/>
            <button onClick={() => setCount(count + 1)}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}