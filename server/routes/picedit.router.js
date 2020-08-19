const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req, res) => {
  const picture = req.body.picture;
  const owner_id = req.body.owner_id;

  const queryText = 'UPDATE "dog" SET "picture"=$1 WHERE "owner_id"=$2;';
  pool
    .query(queryText, [picture, owner_id])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
