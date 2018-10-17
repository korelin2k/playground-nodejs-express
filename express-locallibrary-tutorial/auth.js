const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: process.env.key_one.googleClientID,
            clientSecret: process.env.key_one.googleClientSecret,
            callbackURL: 'https://figgins-playground.herokuapp.com/'
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};