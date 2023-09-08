import { SearchBar } from '../../components/SearchBar';
import './index.css'
import { useState } from 'react'
import { SearchResultList } from '../../components/SearchResultList';

function ProductSearch() {
    const [results, setResults] = useState([]);
    console.log(results);

    return (
        <div className='App'>
        <div className='search-bar-container'>
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && <SearchResultList results={results} />}
        </div>
        </div>
    );
}

export default ProductSearch;