const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.header("token");

  console.log(token);
  try {
    if (!token) {
      res.status(401).json({ error: "Access denied" });
    }
    const secret_key = process.env.SECRET_KEY;
    const decode_token = jwt.verify(token, secret_key);
    if (req.method === "POST" && req.originalUrl == "/directory") {
      req.body.userId = decode_token.userId;
    } else if (req.method === "POST" && req.originalUrl == "/todo") {
      req.body.userId = decode_token.userId;
    } else {
      req.userId = decode_token.userId;
    }
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "TokenExpiredError" });
    }
    return res.status(401).json({ error: "Invalid token" });
  }
};
module.exports = { verifyToken };
