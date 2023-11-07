const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    console.log("token", token);

    try {
      const verified = jwt.verify(token, process.env.ACCESS_TOKEN);
      if (verified) {
        console.log(verified)

        req.user = verified;
        next();
        return;
      }
    } catch (error) {
      console.error("Token verification failed: ", error);
    }
  }

  res.status(401);
  throw new Error("User is not authorized or token is missing");
};

module.exports = verifyToken;
