const express = require('express');
const pool = require('../modules/pool');
const { response } = require('express');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "dog" WHERE "dog".owner_id =$1;`;
  pool
    .query(queryText, [req.user.id])
    .then((response) => res.send(response.rows))
    .catch((error) => console.log('Error in dog get route', error));
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
  const picture = req.body.picture;

  const queryText =
    'INSERT INTO "dog" (name, energy_level, size, play_style, description, owner_id, picture) VALUES ($1, $2, $3, $4, $5, $6, $7)';
  pool
    .query(queryText, [
      name,
      energy_level,
      size,
      play_style,
      description,
      owner_id,
      picture,
    ])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
