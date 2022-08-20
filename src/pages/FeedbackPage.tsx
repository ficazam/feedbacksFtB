import React from "react";

import { FeedBackList } from "../components/FeedBackList";
import { FeedBackForm } from "../components/FeedBackForm";
import { AboutLink } from "../components/AboutLink";



export const FeedBackPage = () => {

  return (
    <>
      <FeedBackForm />
      <FeedBackList />
      <AboutLink />
    </>
  );
};
