const express = require('express');
const common = require('../controllers/common.controller');
const posts = require('../controllers/post.controllers');

const router = express.Router();

router.get('/home', common.home);
router.get('/posts', posts.list);

module.exports = router;