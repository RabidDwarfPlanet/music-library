import React from "react";
import './InputField.css'

const InputField = ({label = '', value, onChange, type}) => {
    return ( 
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input className="form-control" type={type} value={value || ''} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}
 
export default InputField;