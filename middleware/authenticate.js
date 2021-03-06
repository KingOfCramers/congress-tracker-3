var { User } = require("../models/user");
const path = require("path");
const { env } = require("../config/config.js");

const authenticate = (req, res, next) => { // The actual route will not run until the next callback is called. The point of the route is to ensure that the token from our request is included in our database. If it isn't the rest of the code will not run, and a 401 error will trigger.
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

            if(env === "development"){
                req.user = {
                    _id: "5b80106bcf7b5d60b4e03baa" // Setup based on ._id of relevant user.
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