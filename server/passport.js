const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;

const GOOGLE_CLIENT_ID =
  "476377891699-cdstabkvto7di58s8bf4avu9p7v1mptu.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "5ff9087a10cd9eecd95b";
const GITHUB_CLIENT_SECRET = "74dd607168c678cf02e633f90955e8fb33566332";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      // const user = new User({
      //   username:profile.displayName,
      //   avatar: profile.photos[0]
      // })
      // await user.save()
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
