const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  res.send(req.dog);
});

/**
 * POST route template
 */
router.post('/register', (req, res) => {
  const name = req.body.name;
  const energy_level = req.body.energy_level;
  const size = req.body.size;
  const play_style = req.body.play_style;
  const description = req.body.description;
  const owner_id = req.body.owner_id;

  const queryText =
    'INSERT INTO "dog" (name, energy_level, size, play_style, description, owner_id) VALUES ($1, $2, $3, $4, $5, $6)';
  pool
    .query(queryText, [
      name,
      energy_level,
      size,
      play_style,
      description,
      owner_id,
    ])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
