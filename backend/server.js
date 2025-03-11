const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express(); // ✅ Define app first

app.use(cors());
app.use(express.json());

const scannerRoutes = require('./routes/scannerRoutes'); // ✅ Import after defining app
app.use('/api/scanner', scannerRoutes);

// Example Route
app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
