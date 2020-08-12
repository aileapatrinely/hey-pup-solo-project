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
  const queryString = `INSERT INTO "image" (picture) VALUES ($1);`;
  pool.query(queryString, [imageUrl]);
  res.sendStatus(200);
});

module.exports = router;
