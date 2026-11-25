import jwt from "jsonwebtoken";
export function name(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    if (!token) {
      res.status(401).stats({
        message: "Token not found",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(403).json({
      message: "Invalid or expired token",
    });
  }
}
