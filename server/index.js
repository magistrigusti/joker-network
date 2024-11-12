const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Тестовый маршрут
app.get('/', (req, res) => {
    res.send('Social Network Server is running');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Social Network Server running on http://localhost:${PORT}`);
});
