const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Signup
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).send({ message: 'User with given email already exists' });

    user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ _id: user._id }, 'fea64117c846150927169d6f16bdb574b92782917413a184ee66fdfc35e82f09fc5318822a2bd64f49632d75a4b5490f0eb3bd22d11da005af83f24f528ef5c3');
    res.status(201).send({ data: token, message: 'User created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
});

module.exports = router;
