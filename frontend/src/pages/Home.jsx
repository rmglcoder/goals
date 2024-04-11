import { useEffect } from "react";
import { useGoalContext } from "../hooks/useGoalContext";
import GoalDisplay from "../components/GoalDisplay";
import GoalForm from "../components/GoalForm";

const Home = () => {
  const { goals, dispatch } = useGoalContext();

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch("/api/goals/");
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_GOALS", payload: json });
        } else {
          console.error("Error fetching goals:", json);
        }
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };

    fetchGoals();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {goals &&
          goals.map((goal) => <GoalDisplay key={goal._id} goal={goal} />)}
      </div>
      <GoalForm />
    </div>
  );
};

export default Home;
