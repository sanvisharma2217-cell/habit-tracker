

export default function HabitList({ habits,
    toggleHabit, deleteHabit  }) {
 
  return (
    <div className="habits">
        <h2>My Habits</h2>
        {habits.map((habit, index) => (
            <div className="habit-item" key={index}>
                <input type="checkbox"
                checked={habit.completed}onChange={() =>
                    toggleHabit(index)}
                 />
                <span className="habit-name">{habit.name}</span>
                <button 
                className="delete-button"
                onClick={() => deleteHabit(index)}>
                    Delete
                    </button>
                
                </div>
        ))}
    </div>
  )
}
