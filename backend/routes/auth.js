const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Login
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ message: 'Invalid email or password' });

    const validPassword = await user.comparePassword(password);
    if (!validPassword) return res.status(400).send({ message: 'Invalid email or password' });

    const token = jwt.sign({ _id: user._id }, 'fea64117c846150927169d6f16bdb574b92782917413a184ee66fdfc35e82f09fc5318822a2bd64f49632d75a4b5490f0eb3bd22d11da005af83f24f528ef5c3');
    res.status(200).send({ data: token, message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
});

module.exports = router;
