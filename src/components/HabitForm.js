import { useState } from "react";



export default function HabitForm({ addHabit }) {
    const [habitName, setHabitName] =
    useState("");
  return (
    <div className="habit-form">
        <input
        className="habit-input"
           type="text"
           placeholder="Enter a habit"
           value={habitName}
           onChange={(e) =>
            setHabitName(e.target.value)}
            />
            <button 
            className="add-button"
            onClick={() =>
            addHabit(habitName)}>
                    Add Habit 
            </button>
           
    </div>
  );
}
