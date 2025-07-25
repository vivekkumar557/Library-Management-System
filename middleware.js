module.exports.isloggedin=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("error","You must logged in!");
        return res.redirect("/library");
    }
    next();
}