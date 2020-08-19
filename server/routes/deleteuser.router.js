const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.delete('/:id', (req, res) => {
  const id = req.params;
  const queryText = 'DELETE FROM "user" WHERE "id"=$1;';
  pool
    .query(queryText, [id])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
