import { useState } from "react";

import Description from "./components/description";
import Feedback from "./components/Feedback";
import Options from "./components/options";
import "./App.css"


const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  return (
    <>
      <Description/>
      <Options
        options={Object.keys(feedback)} 
        onLeaveFeedback={updateFeedback} 
      />
      <Feedback {...feedback}/>
    </>
  );
};

export default App;