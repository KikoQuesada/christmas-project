const { post } = require('../configs/router.config');
const posts = require('../models/post.model');

module.exports.list = (req, res, next) => {
    res.render('posts/list', {
        posts: posts
    });
};

module.exports.new = (req, res, next) => {
    res.render('posts/new');
};

module.exports.create = (req, res, next) => {
    const { title, image, text } = req.body;
    post.push(newPost);
    res.redirect('/posts');
};