import { useState, useEffect } from "react";

import Description from "./components/description";
import Feedback from "./components/Feedback";
import Options from "./components/options";
import Notification from "./components/notification";
import "./App.css"

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

  const updateFeedback = feedbackType => {
    if (feedbackType === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      }));
    }
    
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description/>
      <Options
        options={Object.keys(feedback)} 
        onLeaveFeedback={updateFeedback} 
        total={totalFeedback}
      />
      {totalFeedback> 0 ? (<Feedback {...feedback} total={totalFeedback} positive={positiveFeedback}/>) : (<Notification/>)}
    </>
  );
};

export default App;