//your appilcation needs to maintain a tempory login state using cookies. Create a route /login that set a cookie 
//indicating the user is logged in. Create a protected route /profile that is accessible only if the cookie exists. 
//Create a /logout that clears the login code
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// ---------------- LOGIN ROUTE ----------------
app.get("/login", (req, res) => {
  // Set cookie (temporary login)
  res.cookie("isLoggedIn", "true", {
    httpOnly: true, // cannot be accessed by JS
    maxAge: 60 * 60 * 1000, // 1 hour
  });

  res.send("✅ Logged in successfully");
});

// ---------------- AUTH MIDDLEWARE ----------------
const checkAuth = (req, res, next) => {
  if (req.cookies.isLoggedIn) {
    next(); // allow access
  } else {
    res.status(401).send("❌ Access denied. Please login first.");
  }
};

// ---------------- PROTECTED ROUTE ----------------
app.get("/profile", checkAuth, (req, res) => {
  res.send("👤 Welcome to your profile");
});

// ---------------- LOGOUT ROUTE ----------------
app.get("/logout", (req, res) => {
  res.clearCookie("isLoggedIn");
  res.send("👋 Logged out successfully");
});

// ---------------- SERVER ----------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});