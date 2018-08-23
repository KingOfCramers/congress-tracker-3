var { User } = require("../models/user");
const path = require("path");
const { env } = require("../config/config.js");

const authenticate = (req, res, next) => { // The actual route will not run until the next callback is called. The point of the route is to ensure that the token from our request is included in our database. If it isn't the rest of the code will not run, and a 401 error will trigger.
    console.log("Authenticating in ", env);
    var token = req.header("x-auth");
    User.findByToken(token)
        .then((user) => {
            if(!user) {
                return Promise.reject(); // Will cause catch block to fire.
            }
            req.user = user;
            req.token = token;
            next();

            })
        .catch(() => {

            /// DEV
            /// Before we have authenticate properly set up, we should just return the standard ._id for dev purposes
            if(env === "development"){
                req.user = {
                    _id: "5b7f20fa32bda955359e6e0e"
                };
                next();
            } else {
                res.status(401)
                    .send();
            }
        });
};

module.exports = {
    authenticate
}