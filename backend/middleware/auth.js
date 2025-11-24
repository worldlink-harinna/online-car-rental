const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../utils/errorHandler");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Authentication invalid - missing or malformed token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, email: payload.email };
    next();
  } catch (error) {
    console.error("JWT verify error:", error);
    return res
      .status(401)
      .json({ message: "Authentication invalid - token verification failed" });
  }
};

module.exports = auth;
