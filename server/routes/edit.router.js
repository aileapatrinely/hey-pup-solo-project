const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route template
 */
router.put('/:id', (req, res) => {
  const name = req.body.name;
  const energy_level = req.body.energy_level;
  const size = req.body.size;
  const play_style = req.body.play_style;
  const description = req.body.description;
  const picture = req.body.picture;
  const id = req.body.id;

  const queryText =
    'UPDATE dog SET name=$1, energy_level=$2, size=$3, play_style=$4, description=$5, picture=$6 WHERE id=$7;';
  pool
    .query(queryText, [
      name,
      energy_level,
      size,
      play_style,
      description,
      picture,
      id,
    ])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
