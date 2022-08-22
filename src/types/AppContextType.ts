import { FeedBackType } from "./FeedbackType";

export interface AppContextType {
    feedbackData: FeedBackType[],
    adder: (text: string, rating:number) => void,
    deleter: (id: number) => void,
    active: (id: number) => void,
    editor: (item:FeedBackType) => void,
    activeFeedback: FeedBackType | undefined,
    editMode: boolean,
    loading: boolean
  }
  