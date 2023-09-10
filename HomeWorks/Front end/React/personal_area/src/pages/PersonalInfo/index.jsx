import Input from '../../components/Input';
import React from "react";

function PersonalInfo({ user }) {
  
  const renderInputs = (obj, parentKey = "") => {
    return Object.entries(obj).map(([key, value]) => {
      const currentKey = parentKey ? `${parentKey} ${key}` : key;
      if (typeof value === "object") {
        return renderInputs(value, currentKey);
      } else {
        return <Input key={currentKey} title={currentKey} value={value} />;
      }
    });
  };

  return (
    <div className="user-profile">
      {renderInputs(user)}
    </div>
  );
}

export default PersonalInfo;
