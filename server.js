const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello from the Backend!');
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});