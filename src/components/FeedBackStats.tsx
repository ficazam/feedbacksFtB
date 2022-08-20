import React, { useContext } from "react";
import { FeedbackContext } from "../store/feedbackContext";


export const FeedBackStats = () => {
  const ctx = useContext(FeedbackContext);

  if (!ctx.feedbackData) {
    return <h1>No Data to Display</h1>
  }

  let ratingAverage:number =
    +(ctx.feedbackData?.reduce((acc, cur) => acc + cur.rating, 0) / ctx.feedbackData.length).toFixed(1).replace(/[.,]0$/, '');

    let ratingAmnt:string = ctx.feedbackData.length === 1 ? `${ctx.feedbackData.length} Review` : `${ctx.feedbackData.length} Reviews`

  return (
    <div className="feedback-stats">
      <h4>{ratingAmnt}</h4>
      <h4>Average Rating: {isNaN(ratingAverage) ? 0 : ratingAverage}</h4>
    </div>
  );
};
