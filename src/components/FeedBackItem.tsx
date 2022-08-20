import React, { useContext } from "react";

import { FaTimes, FaPencilAlt } from "react-icons/fa";

import { Card } from "./Card";

import { FeedBackType } from "../types/FeedbackType";
import { FeedbackContext } from "../store/feedbackContext";

interface iProps {
    item: FeedBackType
}

export const FeedBackItem: React.FC<iProps> = (props) => {
  const ctx = useContext(FeedbackContext)

    const deleteHandler = (id:number):void => {
        ctx.deleter(id);
    } 

    const editHandler = (id:number):void => {
      ctx.active(id);
    }

  return (
    <Card>
      <div className="num-display">{props.item.rating}</div>
      <button className="close" onClick={(id) => deleteHandler(props.item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={(id) => editHandler(props.item.id)}>
        <FaPencilAlt color="purple" />
      </button>
      <div className="text-display">{props.item.text}</div>
    </Card>
  );
};
