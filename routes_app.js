var express = require("express")
var router = express.Router()

router.get("/", function(req, res){
    switch(res.locals.role){
        case 'user_a':
            res.sendfile('./views/app/user_a.html')
            break
        case 'user_b': 
            res.sendfile('./views/app/user_b.html')  
            break
        default:
    }
})

router.get("/login", function(req, res){
    res.sendfile('./views/app/login.html')
})

module.exports = router