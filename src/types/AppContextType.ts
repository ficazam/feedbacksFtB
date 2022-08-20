import { FeedBackType } from "./FeedbackType";

export interface AppContextType {
    feedbackData: FeedBackType[],
    adder: (item: FeedBackType) => void,
    deleter: (id: number) => void,
    active: (id: number) => void,
    editor: (item:FeedBackType) => void,
    activeFeedback: FeedBackType | undefined,
    editMode: boolean
  }
  