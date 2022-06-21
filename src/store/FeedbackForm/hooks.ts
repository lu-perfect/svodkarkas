import { useContext } from "react";
import FeedbackFormContext from "./context";

const useFeedbackForm = () => useContext(FeedbackFormContext);
export default useFeedbackForm;
