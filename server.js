const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Endpoint to roll a die
app.get('/roll/:sides', (req, res) => {
    const sides = parseInt(req.params.sides, 10);
    if (isNaN(sides) || sides <= 0) {
        return res.status(400).json({ error: 'Invalid number of sides' });
    }
    const roll = Math.floor(Math.random() * sides) + 1;
    res.json({ roll });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
