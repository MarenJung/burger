const express = require('express');

const router = express.Router();

const burgers = require('../models/burger');

router.get('/', (req, res) => {
  burgers.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    res.render('index', hbsObject);
  });
});

router.post('/burgers', (req, res) => {
  burgers.insertOne([
    'burger_name', 'devoured',
  ], [
    req.body.burger_name, req.body.devoured,
  ], () => {
    res.redirect('/');
  });
});

router.put('/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  burgers.updateOne({
    devoured: true,
  }, condition, () => {
    res.redirect('/');
  });
});

module.exports = router;