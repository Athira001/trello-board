import React from "react";

import "./style.css";

export const InputField = ({type="text", name, onChange,placeholder="Placeholder text...", required=false, id=""})=> {
  return(
    <input
    className="input-field"
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={(e) => onChange(e, name)}
    required={required}
    id={id}
  />
  );
}