import React from "react";

const InputField = ({label = '', value, onChange, type}) => {
    return ( 
        <div>
            <label>{label}</label>
            <input type={type} value={value || ''} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}
 
export default InputField;