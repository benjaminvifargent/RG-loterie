const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Initialize data.json if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({
        registrations: [],
        config: { dailyStock: 5 }
    }, null, 2));
}

// Get all data
app.get('/api/data', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading data');
        res.json(JSON.parse(data));
    });
});

// Update registrations
app.post('/api/registrations', (req, res) => {
    const newRegistration = req.body;
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading data');
        const db = JSON.parse(data);
        db.registrations.push(newRegistration);
        fs.writeFile(DATA_FILE, JSON.stringify(db, null, 2), (err) => {
            if (err) return res.status(500).send('Error saving data');
            res.json({ success: true });
        });
    });
});

// Update a specific registration (by ID) - used for the digicode result
app.put('/api/registrations/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading data');
        const db = JSON.parse(data);
        const index = db.registrations.findIndex(r => r.id === id);
        if (index !== -1) {
            db.registrations[index] = { ...db.registrations[index], ...updates };
            fs.writeFile(DATA_FILE, JSON.stringify(db, null, 2), (err) => {
                if (err) return res.status(500).send('Error saving data');
                res.json({ success: true });
            });
        } else {
            res.status(404).send('Registration not found');
        }
    });
});

// Update config (stock)
app.post('/api/config', (req, res) => {
    const newConfig = req.body;
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading data');
        const db = JSON.parse(data);
        db.config = { ...db.config, ...newConfig };
        fs.writeFile(DATA_FILE, JSON.stringify(db, null, 2), (err) => {
            if (err) return res.status(500).send('Error saving data');
            res.json({ success: true });
        });
    });
});

// Clear all data
app.delete('/api/data', (req, res) => {
    const emptyData = {
        registrations: [],
        config: { dailyStock: 5 }
    };
    fs.writeFile(DATA_FILE, JSON.stringify(emptyData, null, 2), (err) => {
        if (err) return res.status(500).send('Error clearing data');
        res.json({ success: true });
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Access from other computers via http://[YOUR-IP]:${PORT}`);
});
