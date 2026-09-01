# 🌱 Habit Tracker

> **Automate your discipline**. 

A clean, modern and interactive **Habit Tracker web application built with React.js**.  
Create your habits, mark them as completed, and instantly see your daily progress.

---

## ✨ Features

- ➕ **Add Habits** — Quickly create new habits you want to build.
- ✅ **Track Completion** — Mark habits as completed with a single click.
- 📊 **Today's Progress** — See how many habits you've completed today.
- 📈 **Progress Percentage** — Get an instant visual representation of your progress.
- 💬 **Motivational Feedback** — Receive encouraging messages based on your progress.
- 🗑️ **Delete Habits** — Remove habits you no longer want to track.
- 🎨 **Clean & Modern UI** — Simple, responsive and user-friendly interface.
- ⚡ **Interactive Experience** — Progress updates instantly whenever a habit changes.

---

## 🖥️ Application Overview

The Habit Tracker provides a simple dashboard where everything is available at a glance.

### 🌱 Header
A clear introduction to the application with the message:

**"Automate your discipline"**

### ➕ Add Habit
Enter the name of a habit and click **Add Habit** to add it to your tracker.

### 📊 Today's Progress
The progress section displays:

- Completed habits
- Total habits
- Completion percentage
- Visual progress bar
- Motivational feedback
- The basic formula used is:
Progress Percentage = (Completed Habits / Total Habits) × 100
-For example:
Completed Habits = 3
Total Habits = 5

Progress = ** (3 / 5) × 100
         = 60%**

**3 / 5 completed — 60%**

### 📋 My Habits
All created habits appear in an organized list.

Each habit includes:

- ☑️ Completion checkbox
- 📝 Habit name
- 🗑️ Delete button

---

## ⚛️ React Concepts Used

This project was built to practice fundamental React concepts and understand how state-driven interfaces work.

### `useState`

Used to store and update the list of habits.

## 🧠 How It Works

The Habit Tracker follows a simple and interactive state-driven workflow.

```text
User enters a habit
        ↓
Clicks "Add Habit"
        ↓
New habit is added to the habits list
        ↓
Habit appears under "My Habits"
        ↓
User marks a habit as completed
        ↓
Completed habits are counted
        ↓
Progress percentage is calculated
        ↓
Progress bar and message update automatically

## 📊 Progress Calculation

The Habit Tracker automatically calculates the user's daily progress based on completed habits.

The calculation works by comparing the number of completed habits with the total number of habits.

```text
Completed Habits
        ↓
Count completed habits
        ↓
Count total habits
        ↓
Calculate completion percentage
        ↓
Update progress bar
        ↓
Display percentage and motivational message



```js
const [habits, setHabits] = useState([]);
