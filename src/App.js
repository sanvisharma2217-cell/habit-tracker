import { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import Progress from "./components/Progress";
import "./App.css";

 export default function App() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("habits");

    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);
  

  function addHabit(habit) {
    const newHabit = {
      name: habit,
      completed: false
    };

    setHabits([...habits, newHabit]);
  }

  function toggleHabit(index) {
    const updatedHabits = [...habits];

    updatedHabits[index].completed =
      !updatedHabits[index].completed;

    setHabits(updatedHabits);
  }

  function deleteHabit(index) {
    const updatedHabits = habits.filter(
      (habit, i) => i !== index
    );

    setHabits(updatedHabits);
  }

  return (
    <div className="app">
      <div className="tracker">
      <h1>🌱 Habit Tracker</h1>
      <p className="subtitle">Automate your discipline</p>

      <HabitForm addHabit={addHabit} />

      <Progress habits={habits} />

      <HabitList
        habits={habits}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
      />
    </div>
    </div>
  );
}

