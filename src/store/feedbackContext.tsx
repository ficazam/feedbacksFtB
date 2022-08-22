import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

import { FeedBackType } from "../types/FeedbackType";
import { AppContextType } from "../types/AppContextType";

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
  loading: false,
});

interface iProps {
  children: JSX.Element;
}

export const FeedbackContextProvider: React.FC<iProps> = (props) => {
  const [feedbackData, setFeedackData] = useState<FeedBackType[]>([]);
  const [activeFeedback, setActiveFeedback] = useState<FeedBackType>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchFeedback = () => {
    setLoading(true);

    axios
      .get(`${process.env.REACT_APP_BASE_URL}?_sort=id&_order=desc`)
      .then((res) => setFeedackData(res.data))
      .catch((e) => console.log(e));
    setLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const adder = (text: string, rating: number): void => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}`, { text: text, rating: rating })
      .then((res) => setFeedackData([res.data, ...feedbackData]))
      .catch((e) => console.log(e));
  };

  const deleter = (id: number): void => {
    if (window.confirm("Are you sure you want to delete it?")) {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/${id}`)
        .then((res) =>
          setFeedackData(() => feedbackData.filter((item) => item.id !== id))
        )
        .catch((e) => console.log(e));
    }
  };

  const active = (id: number): void => {
    setActiveFeedback(feedbackData.find((item) => item.id === id));
    setEditMode(true);
  };

  const editor = (item: FeedBackType): void => {
    const editedItem: FeedBackType = {
      id: item.id,
      rating: item.rating,
      text: item.text,
    };

    axios
      .put(`${process.env.REACT_APP_BASE_URL}/${item.id}`, editedItem)
      .then((res) =>
        setFeedackData(
          feedbackData.map((fb) =>
            fb.id === editedItem.id ? { ...fb, ...editedItem } : fb
          )
        )
      )
      .then(() => setEditMode(false))
      .then(() =>
        setActiveFeedback({
          id: 0,
          text: "",
          rating: 0,
        })
      )
      .catch((e) => console.log(e));
  };

  const contextData = {
    feedbackData,
    loading,
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
