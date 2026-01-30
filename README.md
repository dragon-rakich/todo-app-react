# todo-app-react
# Todo App (React + Parcel + JSON Server)

This project is a simple Todo application built with React and bundled using Parcel. The setup follows the official Parcel React recipe, which provides a lightweight development environment without the complexity of manual bundler configuration.

The app allows users to create tasks, mark them as completed, and delete them. All task data is stored on a JSON Server, which acts as a mock backend API. This makes the project behave like a real full‑stack application while remaining easy to run locally.

## Features

- Add new tasks through an input field and button  
- Mark tasks as completed or not completed  
- Delete tasks  
- All actions (create, update, delete) are persisted to a JSON Server  
- Responsive layout for mobile, tablet, and desktop  
- Component‑scoped styling using Sass (SCSS)

## Tech Stack

- React – UI library  
- Parcel – Bundler and development server  
- JSON Server – Fake REST API for storing tasks  
- Sass (SCSS) – Styling for each component  
- JavaScript (ES6+)

## How It Works

- When a user adds a task, the app sends a POST request to JSON Server  
- When a user toggles a task’s completion state, the app sends a PATCH request  
- When a user deletes a task, the app sends a DELETE request  
- JSON Server stores all changes in `src/database/tasks.json`, so the data persists between refreshes

## Responsive Design

The app is fully responsive.  
Typography and spacing scale based on the root font-size, and layout adjustments are handled with CSS Grid and Flexbox. Each component has its own `.scss` file for clean, modular styling.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm start
```

### 3. API requirement
The app expects a local API running at:

Run the backend as:
```bash
json-server --watch src/database/tasks.json
```

http://localhost:3000/tasks

Example task object:
```json
{
  "id": 1,
  "title": "Walk the dog",
  "done": false
}
```

## Project Structure

```
src/
├── Components/
│   ├── Button/
│   ├── Todo/
│   └── ...
├── styles/
└── App.js
```

## Notes

- This project is intended for learning and demonstration purposes.
- No authentication or persistence is included by default.

## License

© 2026 Coders Lab
