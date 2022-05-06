const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const notifications = [];

app.post('/notifications', (req, res) => {
    const id = Date.now();
    const notification = {
        id, ...req.body
    }
    
    notifications.push(notification);
    
    res.json(notification);
});

app.get('/notifications', (req, res) => {
    res.json(notifications);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
