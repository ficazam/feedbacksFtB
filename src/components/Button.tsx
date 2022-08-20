import React from "react";

interface iProps {
  children: React.ReactNode;
  version?: string;
  type?: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
}

export const Button: React.FC<iProps> = (props) => {
  return (
    <button 
        className={`btn btn-${props.version}`} 
        type={props.type}
        disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};


Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
  
}