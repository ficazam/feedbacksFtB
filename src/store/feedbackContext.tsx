import React, { useState, createContext } from "react";

import { FeedBackType } from "../types/FeedbackType";
import { AppContextType } from "../types/AppContextType";

import { data } from "./data";

export const FeedbackContext = createContext<AppContextType>({
  feedbackData: [],
  adder: () => {},
  deleter: () => {},
  active: () => {},
  editor: () => {},
  activeFeedback: {
    id: 0,
    text: "",
    rating: 0,
  },
  editMode: false,
});

interface iProps {
  children: JSX.Element;
}

export const FeedbackContextProvider: React.FC<iProps> = (props) => {
  const [feedbackData, setFeedackData] = useState<FeedBackType[]>(data);
  const [activeFeedback, setActiveFeedback] = useState<FeedBackType>();
  const [editMode, setEditMode] = useState<boolean>(false);

  const adder = (item: FeedBackType): void => {
    setFeedackData([...feedbackData, item]);
  };

  const deleter = (id: number): void => {
    if (window.confirm("Are you sure you want to delete it?")) {
      setFeedackData(() => feedbackData.filter((item) => item.id !== id));
    }
  };

  const active = (id: number): void => {
    setActiveFeedback(feedbackData.find((item) => item.id === id));
    setEditMode(true);
  };

  const editor = (item: FeedBackType): void => {
    const edit: number = feedbackData.findIndex(
      (feedback) => feedback.id === item.id
    );
    feedbackData[edit].rating = item.rating;
    feedbackData[edit].text = item.text;

    setFeedackData([...feedbackData]);
    setEditMode(false);
    setActiveFeedback({
      id: 0,
      text: "",
      rating: 0,
    });
  };

  const contextData = {
    feedbackData,
    adder,
    deleter,
    active,
    editor,
    activeFeedback,
    editMode,
  };

  return (
    <FeedbackContext.Provider value={contextData}>
      {props.children}
    </FeedbackContext.Provider>
  );
};
