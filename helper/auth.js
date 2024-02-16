const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")
    if (token[0] === "Bearer" && jwt.verify(token[1], "superScretthing")) {
      next()
    }
  } catch (e) {
    if (e.name === "JsonWebTokenError") res.sendStatus(401)
  }
}
module.exports = auth
