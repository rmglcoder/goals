import { useState } from "react";
import { useGoalContext } from "../hooks/useGoalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const GoalForm = () => {
  const { dispatch } = useGoalContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const goal = { title, description, completed };

    const response = await fetch("/api/goals", {
      method: "POST",
      body: JSON.stringify(goal),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setDescription("");
      setCompleted(false);
      setError(null);
      console.log("new goal added:", json);
      dispatch({ type: "CREATE_GOAL", payload: json });
    }
  };

  // Dummy motivational quotes
  const motivationalQuotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "The only way to do great work is to love what you do.",
    "You are never too old to set another goal or to dream a new dream.",
  ];

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Goal</h3>

        <label>Goal Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Description:</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <button>Add Goal</button>
        {error && <div className="error">{error}</div>}
      </form>

      {/* Suggestions section */}
      <div className="suggestions">
        <h4>Suggestions:</h4>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> Set SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> Prioritize your goals based on importance and urgency
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> Break down big goals into smaller, manageable tasks
          </li>
        </ul>
      </div>

      <div className="motivational-quotes">
        <h4>Motivational Quotes:</h4>
        {motivationalQuotes.map((quote, index) => (
          <div className="quote-card" key={index}>
            <p>{quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalForm;
