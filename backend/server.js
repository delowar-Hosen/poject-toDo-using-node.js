const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const { db } = require("./config/database");
require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();

//middilware
app.use(cors());
app.use(express.json());
app.use(express.json({ extended: true }));

//databse
db();

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//port

//sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URL,
      collectionName: "sessions",
    }),
    // cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
    }
  )
);

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Redirect to the React front-end after successful authentication
    res.redirect("http://localhost:3000");
  }
);

app.get("/api/user", (req, res) => {
  // Retrieve user data from the session
  const user = req.user;
  res.json(user);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Port is running");
});
