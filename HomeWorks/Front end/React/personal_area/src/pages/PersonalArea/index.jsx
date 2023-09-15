import { useContext, useState } from "react";
import "./style.css";
import Cart from "../Cart";
import PersonalInfo from "../PersonalInfo";
import ProductSearch from "../ProductSearch";
import { Context } from "../../context";

function PersonalArea({user}) {
    const [activePage, setActivePage] = useState('PersonalInfo');
    const { count } = useContext(Context);

    const pages = [
        { id: 'PersonalInfo', label: 'Personal Info', component: <PersonalInfo user={user}/> },
        { id: 'ProductSearch', label: 'Product Search', component: <ProductSearch /> },
        { id: 'Cart', label:'Cart',count:count, component: <Cart/> },
      ];
    
    const handleButtonClick = (pageId) => {
        setActivePage(pageId);
    };

    return (
        <div className="account-container">
            <h1>Welcome, personal account, {user.name}</h1>
            <div className="nav-menu">
                {pages.map(({id, label, count}) => (
                    <button key={id} onClick={() => handleButtonClick(id)}>
                    {label} <span className="count">{count}</span>
                    </button>
                ))}
            </div>

            <div>
                {activePage && pages.find((page) => page.id === activePage).component}
            </div>
        </div>
    )
}

export default PersonalArea;