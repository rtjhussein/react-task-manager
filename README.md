# React Task Manager

## Overview

This is a simple multi-page productivity application built with React. It allows users to create tasks, mark them as complete, delete tasks, and keep their tasks saved between page reloads using browser storage.

This project was built as a learning exercise to demonstrate core React concepts including components, props, state management, hooks, event handling, and routing.

The application is intentionally structured in a clear and beginner-friendly way so that each part of the React architecture can be easily understood.

---

## Features

- Add new tasks
- Delete existing tasks
- Mark tasks as completed
- Persistent task storage using localStorage
- Multi-page navigation
- Task statistics on the home page

---

## Concepts Demonstrated

This project demonstrates the following React concepts:

### Components

React applications are built using small reusable UI blocks called components.

Examples in this project:

- Navbar
- TaskForm
- TaskList
- TaskItem
- Home Page
- Tasks Page
- About Page

Each component has a single responsibility and focuses on one part of the interface.

### Props

Props allow data to be passed from parent components to child components.

Example:

App -> Tasks -> TaskList -> TaskItem

Task data flows downward through these components using props.

### State

State stores dynamic data that can change during the lifetime of the application.

The task list is stored as state inside the App component so that multiple pages can access it.

### Event Handling

User interactions trigger events such as:

- Clicking a checkbox
- Submitting a form
- Clicking the delete button

Event handler functions update the application state.

### React Hooks

Two important hooks are used:

useState
Stores the tasks array and allows the UI to update when tasks change.

useEffect
Automatically saves tasks to localStorage whenever the task list updates.

### React Router

React Router enables multi-page navigation without reloading the browser.

Pages included in this project:

- Home
- Tasks
- About

---

## Project Structure

```
src/

App.jsx

components/
  Navbar.jsx
  TaskForm.jsx
  TaskList.jsx
  TaskItem.jsx

pages/
  Home.jsx
  Tasks.jsx
  About.jsx

styles/
  app.css
```

### App.jsx

This is the root component of the application. It manages the main tasks state and passes data to other components.

Responsibilities:

- Store task state
- Handle adding tasks
- Handle deleting tasks
- Handle toggling completion
- Save tasks to localStorage
- Configure application routes

### Components

Components are reusable UI pieces.

Navbar
Handles application navigation.

TaskForm
Allows users to create new tasks.

TaskList
Displays all tasks.

TaskItem
Represents a single task.

### Pages

Pages represent major views in the application.

Home
Displays task statistics and a quick overview.

Tasks
Displays the full task manager interface.

About
Explains the purpose of the application.

---

## Data Flow Architecture

React applications typically follow a predictable data flow pattern.

State lives in a parent component and flows downward through props.

```
App (tasks state)

  -> Home
  -> Tasks
        -> TaskForm
        -> TaskList
              -> TaskItem
```

Events travel upward to update the state.

```
TaskItem -> TaskList -> Tasks -> App
```

This pattern is called "lifting state up" and ensures there is a single source of truth for the application's data.

---

## Task Object Structure

Each task is stored as an object.

Example:

```
{
  id: 1700000000,
  text: "Learn React",
  completed: false
}
```

Fields:

id
Unique identifier for the task.

text
The task description entered by the user.

completed
A boolean value indicating whether the task is finished.

---

## Local Storage Persistence

Tasks are saved in the browser using localStorage so that tasks remain even after the page reloads.

When the application loads:

1. React checks localStorage for saved tasks.
2. If tasks exist, they are loaded into state.

Whenever tasks change:

1. useEffect runs
2. The updated task list is saved to localStorage.

---

## UI Design & Plugins

The app features a **"Midnight Glassmorphism"** aesthetic.

The following plugins were integrated:

### Framer Motion

Used to implement fluid animations. It handles smooth page transitions when navigating between routes, as well as dynamic layout animations when tasks are added or deleted from the list.

### Lucide React

Provides crisp, consistent SVG icons across the application.

### React Hot Toast

Delivers custom-styled pop-up notifications (toasts) tailored to match the app's dark theme.

---

## Installation

1. Clone the repository

```
git clone https://github.com/rtjhussein/react-task-manager.git
```

2. Navigate to the project folder

```
cd react-task-manager
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm run dev
```

The application will run on:

[http://localhost:5173](http://localhost:5173)

---

## Technologies Used

- React
- React Router
- JavaScript (ES6)
- Vite
- HTML
- CSS
- Framer Motion (Animations)
- Lucide React (Icons)
- React Hot Toast (Notifications)

---

## Future Improvements

Potential upgrades for this project include:

- Task editing functionality
- Task categories
- Task filtering (completed / active)
- Drag and drop task ordering
- Backend database storage

---

## Learning Goals

This project is designed to help understand:

- Component-based architecture
- React state management
- Prop passing
- Event-driven UI updates
- Routing in single-page applications

---

## License

This project is open source and available under the MIT License.
