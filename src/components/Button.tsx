import React, { FC } from "react";

interface ButtonProp extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string;
}

const Button: FC<ButtonProp> = (prop) =>{
    return <button type="button" {...prop}>{prop.text}</button>
}

export default Button