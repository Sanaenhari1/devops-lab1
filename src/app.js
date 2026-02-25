const express = require('express');
const app = express();
app.use(express.json());

// Import the tasks router
const tasksRouter = require('./routes/tasks');

// Root route
app.get('/', (req, res) => { 
    res.json({ message: "Task Manager API running (Lab2)" }); 
}); 

// CI test change 
console.log("Testing CI with a Pull Request");

// Use the tasks router for all /tasks routes
app.use('/tasks', tasksRouter);

// IMPORTANT: Only start the server if this file is run directly
// This prevents the server from starting during tests
if (require.main === module) {
    const port = 3000;
    app.listen(port, () => {
        console.log(`API running on port ${port}`);
    });
}

// Export app for testing
module.exports = app;