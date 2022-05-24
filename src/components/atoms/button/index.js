import React from "react";

import "./style.css";

export const Button = ({text, type="button"})=> {
 return <button type={type}  className="button">{text}</button>
}