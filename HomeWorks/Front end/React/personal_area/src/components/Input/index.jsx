import "./index.css";
import icon from "../../assets/icons/icon_edit.png";
import saveIcon from "../../assets/icons/icon-save.png"
import { useState } from "react";

function Input({value, title}) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [newValue, setNewValue] = useState(value);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSaveClick = () => {
        setNewValue(inputValue);
        setIsEditing(false);
    };
   
    return(
        
        <div >
            {isEditing==false ? (
                <div className="input-container">
                    <div>
                        <label>{title}:</label>
                        <p>{newValue}</p>
                    </div>
                    {title === "id" || title ==="username" || title ==="email" ? null : 
                    <button onClick={handleEditClick}><img src={icon} className="icon"/></button>}
                </div>
            ) : (
                <div className="input-container">
                    <div>
                        <label>{title}</label>
                        <input type="text" value={inputValue} onChange={handleInputChange} />
                    </div>
                    <button on onClick={handleSaveClick}><img src={saveIcon} className="icon"/></button>
                </div>
            )}    
        </div>
    )
}

export default Input;