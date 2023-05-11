const jwt = require("jsonwebtoken");
const authentication= async function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token) return res.send({ status: false, msg: "token must be present" });
    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-technetium-very-very-secret-key");
    req.decodedToken=decodedToken;
    if (!decodedToken){
      return res.send({ status: false, msg: "token is invalid" });
    }
    next()
}
const authorisation= async function(req,res,next){
  userId=req.params.userId
  user=req.decodedToken.userId;
  if(userId==user){
    next()
  }
  else{
    res.send({msg:"you are not authorised"})
  }
} 
module.exports.authentication=authentication;
module.exports.authorisation=authorisation;