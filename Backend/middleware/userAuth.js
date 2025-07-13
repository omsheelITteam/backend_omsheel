// const jwt = require("jsonwebtoken");
// const userAuth = async (req, res, next) => {
//   const { token } = req.cookies;
//   if (!token) {
//     res.json({ success: false, message: "Not Authorized Login again" });
//   }
//   try {
//     const tokenDecode = jwt.verify(token, process.env.JWT_SECRETKEY);
//     if (tokenDecode.id) {
//       req.body.userId = tokenDecode.id;
//     } else {
//       res.json({ success: false, message: "Not Authorized Login Again" });
//     }
//     next();
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };
const jwt = require("jsonwebtoken"); // Import the jsonwebtoken package

// Middleware function to authenticate user using JWT
const userAuth = async (req, res, next) => {
  const { token } = req.cookies; // Extract token from cookies

  if (!token) {
    // If token is not present, respond with not authorized
    return res.json({ success: false, message: "Not Authorized Login again" });
  }

  try {
    // Verify and decode the JWT token using secret key
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRETKEY);

    if (tokenDecode.id) {
      // Ensure req.body is defined before assigning to it
      req.body = req.body || {};
      // Attach the user ID from token to request body
      req.body.userId = tokenDecode.id;
    } else {
      // If no user ID found in token, respond with not authorized
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // If token verification fails, send error message
    res.json({ success: false, message: error.message });
  }
};

module.exports = userAuth;
