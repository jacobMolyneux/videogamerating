const Game = require('../models/gameModel')
const User = require('../models/userModels')

exports.create_game = (req, res, next) => {
    const game = new Game(
        {
            title: req.body.title,
            genre: req.body.genre,
            rating: req.body.rating,
            image: req.body.image,
            review: req.body.review,
            played: req.body.played
        }
    )
    game.save((err) => {
        if (err) return handleError(err);
    })
    res.json('Game created')
}

exports.rate_game = (req, res, next) => {
    const game = Game.find({id: req.body.id})
    res.json('rate game')
}
exports.review_game = (req, res, next) => {
    res.json('add a review')
}
exports.change_played_status = (req, res, next) => {
    res.json('change played status')
}

