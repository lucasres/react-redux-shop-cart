import React from "react";
import './style.css'

function InputSelect({ handleSelect, children }) {


    return (
        <select className="filter" onClick={(e)=>handleSelect(e.target.value)}>
            {children}
        </select>
    );
}

export default InputSelect;