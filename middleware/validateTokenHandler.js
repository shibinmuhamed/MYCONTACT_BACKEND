const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    console.log(token, "token");
    jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded) => {
      if (err) {
        console.log(err, "ERROR")
        res.status(401);
        throw new Error("User is not authorized");
      }
      console.log(decoded, "decoded");
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401);
    throw new Error("User is not authorized or token is  missing");
  }
});
module.exports = validateToken;
