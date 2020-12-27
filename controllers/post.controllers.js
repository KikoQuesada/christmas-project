const { post } = require('../configs/router.config');
const postsModel = require('../models/post.model');

module.exports.list = (req, res, next) => {

    const post = postsModel;

    res.render('posts/list', {
        posts: post.find,
        title: post.title
    });
};

module.exports.new = (req, res, next) => {
    res.render('posts/new');
};