import React, { useState, useContext, useEffect } from "react";

import { FeedbackContext } from '../store/feedbackContext';

interface iProps {
    setter: (rating:number) => void
}

export const RatingSelect:React.FC<iProps> = props => {
  const [selected, setSelected] = useState<number>(0);

  const ctx = useContext(FeedbackContext);

  useEffect(() => {
    if(ctx.editMode && ctx.activeFeedback) {
      setSelected(ctx.activeFeedback.rating);
    }
  }, [ctx.activeFeedback, ctx.editMode])

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSelected(+e.currentTarget.value);
    props.setter(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <li key={num}>
          <input
            type="radio"
            id={`num${num}`}
            name="rating"
            value={num}
            onChange={handleChange}
            checked={selected === num}
          />
          <label htmlFor={`num${num}`}>{num}</label>
        </li>
      ))}
    </ul>
  );
};
