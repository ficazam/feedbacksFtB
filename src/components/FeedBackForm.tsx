import React, { useState, useContext, useEffect } from "react";

import { Card } from "./Card";
import { RatingSelect } from "./RatingSelect";
import { Button } from "./Button";

import { FeedBackType } from "../types/FeedbackType";

import { FeedbackContext } from "../store/feedbackContext";

export const FeedBackForm = () => {
  const [text, setText] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [msg, setMsg] = useState<string | null>("");
  const ctx = useContext(FeedbackContext)

  useEffect(() => {
    if(ctx.editMode && ctx.activeFeedback) {
      setText(ctx.activeFeedback.text);
      setRating(ctx.activeFeedback.rating);
      setDisabled(false)
    }
  }, [ctx.activeFeedback, ctx.editMode])

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if(text === '') {
        setDisabled(true);
        setMsg(null)
    } else if (text !== '' && text.trim().length <= 10) {
        setDisabled(true);
        setMsg('Text must be at least 10 characters.')
    } else {
        setDisabled(false);
        setMsg(null)
    }

    setText(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if(text.trim().length > 10 && ctx.feedbackData && !ctx.editMode) {
        ctx.adder(text, rating);
    }

    if(text.trim().length > 10 && ctx.activeFeedback && ctx.editMode) {
        const newFeedback:FeedBackType = {
            id: ctx.activeFeedback.id,
            rating: rating,
            text: text
        }

        ctx.editor(newFeedback);
    }


    setText('');
    setRating(0);
    setDisabled(true);
    setMsg(null)
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect setter={(item:number) => setRating(item)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review!"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={disabled}>
            Send
          </Button>
        </div>
      </form>
      {msg && <p>{msg}</p>}
    </Card>
  );
};
