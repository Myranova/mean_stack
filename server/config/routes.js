module.exports = function(app) {
    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/' + req.params[0]);
    })
    
    app.get('*', function(req, res) {
        res.render('index', {
        });
    })

    app.post('/login', function(req, res, next) {
        var auth = passport.authentificate('local', function(err, user) {
            if (err) { return next(err); }
            if (!user) { res.send({success : false});
            }
        })
    })
}