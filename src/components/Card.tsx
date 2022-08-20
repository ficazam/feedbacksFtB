import React from "react";

interface IProps {
  children: React.ReactNode;
  reverse?: boolean;
}

export const Card: React.FC<IProps> = (props) => {
  return (
    <div className={`card ${props.reverse && "reverse"}`}>
      {props.children}
    </div>
  );
};
