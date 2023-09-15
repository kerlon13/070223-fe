import SearchResult  from "../SearchResult/index"
import "./index.css"

export const SearchResultList = ({goods, input}) => {

    const filteredGoods = goods.filter((good) =>{
        return (
            input && 
            good && 
            good.title && 
            good.title.toLowerCase().includes(input)
            );
    });

    return (
        <div className="result-list">
            {filteredGoods.map((result) => (
                <SearchResult result={result} key={result.id}/>
            ))}
        </div>
    )
}





// import SearchResult from "../SearchResult/index";
// import "./index.css";
// import { useEffect, useState } from "react";

// export const SearchResultList = ({ goods, input }) => {
//   const [filteredGoods, setFilteredGoods] = useState([]);

//   useEffect(() => {
//     const newFilteredGoods = goods.filter((good) => {
//       return (
//         input &&
//         good &&
//         good.title &&
//         good.title.toLowerCase().includes(input.toLowerCase())
//       );
//     });
//     setFilteredGoods(newFilteredGoods);
//   }, [goods, input]);

//   return (
//     <div className="result-list">
//       {filteredGoods.map((result) => (
//         <SearchResult result={result} key={result.id} />
//       ))}
//     </div>
//   );
// };

