const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: ["Login"],
    maxAge: 60 * 60 * 100 * 24,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

app.listen(5001, () => {
  console.log("Server is running on port:5001");
});
