const router = require('express').Router();
const Program = require('../models/Program');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject } = req.body;
    if (!name || !email || !subject) return res.status(400).send({ message: 'All fields are required' });

    const program = new Program({ name, email, subject });
    await program.save();
    res.status(201).send({ message: 'Program added successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
