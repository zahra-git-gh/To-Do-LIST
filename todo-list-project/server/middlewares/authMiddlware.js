const jwt = require("jsonwebtoken");
const verifyToken= (req, res, next)=>{
    const token=req.header('token')
    try {
        if(!token){
            res.status(401).json({error:'Access denied'})
        }
        const secret_key=process.env.SECRET_KEY
        const decode_token=jwt.verify(token, secret_key)
        if(req.method==='POST' && req.originalUrl == "/category"){
            req.body.userId=decode_token.userId;
        }else if(req.method==='POST' && req.originalUrl == "/todo"){
            req.body.userId=decode_token.userId;
        }
        else{
            req.userId=decode_token.userId
        }
        next()
    } catch (error) {
        res.status(401).json({ error });
    }
}
module.exports={verifyToken}