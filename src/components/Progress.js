export default function Progress({ habits }) {
  const completedHabits = habits.filter(
    (habit) => habit.completed
  ).length;

  const totalHabits = habits.length;

  const percentage =
    totalHabits === 0
      ? 0
      : Math.round((completedHabits / totalHabits) * 100);

  return (
    <div className="progress">
      <h2>Today's Progress</h2>

      <div className="progress-info">
        <div>
          <p className="progress-text">
            {completedHabits} / {totalHabits} completed
          </p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        <div className="percentage">
          {percentage}%
        </div>
      </div>
    </div>
  );
}

