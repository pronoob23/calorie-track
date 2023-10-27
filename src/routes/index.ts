import express from 'express';
const router = express.Router();

router.use('/food', require('./food'));

module.exports = router;
