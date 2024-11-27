import React, {ButtonHTMLAttributes} from 'react';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({title, onClick, className}: ButtonProps) => {



    return (
        <button className={className} onClick={onClick}>{title}</button>
    );
};


