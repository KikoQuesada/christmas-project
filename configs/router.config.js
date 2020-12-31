const express = require('express');
const common = require('../controllers/common.controller');
const posts = require('../controllers/post.controllers');

const router = express.Router();

router.get('/home', common.home);
router.get('/posts', posts.list);
router.post('/posts', posts.new);
router.get('/new', posts.new);

module.exports = router;