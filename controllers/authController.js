exports.get_all_games = (req, res, next) => {
    res.json('get all books')
}

exports.get_catalog = (req, res, next) => {
    res.json('get user catalog')
}

exports.add_game = (req, res, next) => {
    res.json('add a book')
}
exports.add_rating = (req, res, next) => {
    res.json('add a rating')
}

exports.change_rating = (req, res, next) => {
    res.json('change rating')
}

exports.delete_game_from_catalog = (req, res, next) => {
    res.json('delete book from catalog')
}
