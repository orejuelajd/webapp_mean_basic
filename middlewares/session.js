require('../db.js');

module.exports = function(req, res, next){
    if(!req.session.user_id){
        res.redirect("/login")
    }else{
        user.findOne({_id: req.session.user_id}, function(err, user){
            if(err){
                console.log(err)
                res.redirect("/login")
            }else{
                res.locals = {user: user, role: user.role}
                next()
            }
        })
    }
}