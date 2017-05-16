var factory = require('./factory.js');

module.exports.sessions = function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	var object = factory.findCollectionByName("users");
	
	if(!object){
		return res.status(400).send()
	} 
	
	if(req.session.user_id != null){
		//User logged in
	}else{
		object.findOne({username: username, password: password}, function(err, user){
			if(err){
				return res.status(500).send()
			} else{
				if(!user){
					res.redirect("/login")
				}else{
					req.session.user_id = user._id
					req.session.role = user.role
					res.redirect("/app")
				}	
			}
		})
	}
}

module.exports.login = function(req, res){
	res.sendfile('./views/app/login.html')
}

module.exports.logout = function(req, res){
  req.session.destroy(function(err){  
        if(err){  
            console.log(err);  
        }  
        else  {  
            res.redirect('/app');  
        }  
    }); 
}