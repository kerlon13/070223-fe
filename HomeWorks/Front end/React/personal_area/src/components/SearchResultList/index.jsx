import { SearchResult } from "../SearchResult/index"
import "./index.css"

export const SearchResultList = ({results}) => {
    return (
        <div className="result-list">
            {results.map((result, id) => {
                return <SearchResult result={result} key={id}/>
            })}
        </div>
    )
}