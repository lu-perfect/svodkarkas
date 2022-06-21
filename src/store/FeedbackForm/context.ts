import { createContext } from "react";

const FeedbackFormContext = createContext<{
  open: () => void,
  close: () => void,
}>({
  open: () =>() => {},
  close: () =>() => {},
});

export default FeedbackFormContext;
