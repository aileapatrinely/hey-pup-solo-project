const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log(req.body);
  const imageUrl = req.body.imageUrl;
  const queryString = `INSERT INTO "dog" ("picture") VALUES ($1) WHERE "owner_id"=$2`;
  pool.query(queryString, [imageUrl, this.state.user.id]);
  res.sendStatus(200);
});

module.exports = router;
