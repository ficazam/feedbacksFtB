import React, { useContext } from "react";
import { FeedBackItem } from "./FeedBackItem";
import { FeedBackStats } from "./FeedBackStats";

import { motion, AnimatePresence } from "framer-motion";

import { FeedbackContext } from '../store/feedbackContext'

export const FeedBackList = () => {
  const ctx = useContext(FeedbackContext)

  if (!ctx.feedbackData) {
    return <h1>No Data to Display</h1>
  }

  return (
    <>
      <FeedBackStats />
      <AnimatePresence>
        {ctx.feedbackData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};
