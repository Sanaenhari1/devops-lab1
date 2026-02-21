const express = require('express');
const app = express();
app.use(express.json());

// Import the tasks router
const tasksRouter = require('./routes/tasks');

// Root route
app.get('/', (req, res) => {
  res.json({ message: "DevOps Task Manager API is running..." });
});

// Use the tasks router for all /tasks routes
app.use('/tasks', tasksRouter);

app.listen(3000, () => console.log("API running on port 3000"));