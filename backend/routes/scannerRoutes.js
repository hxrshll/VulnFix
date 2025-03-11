const express = require('express');
const { runAudit } = require('../services/scannerService');

const router = express.Router();

router.get('/scan', async (req, res) => {
    try {
        const result = await runAudit();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

