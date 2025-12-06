const express = require("express");
const router = express.Router();
const { Patient } = require("../models"); // make sure Patient model is imported
const { requireAuth } = require("../middleware/auth"); // <-- import this!

router.get('/', requireAuth, async (req, res) => {
  try {
    const patients = await Patient.findAll(); // no doctor-specific filter yet
    res.json({ ok: true, patients }); 
  } catch (err) {
    console.error('patients fetch error', err);
    res.status(500).json({ ok: false, error: 'Server error' });
  }
});

module.exports = router;
