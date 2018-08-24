const { mongoose } = require("../db/mongoose");
const { User } = require("../models/user");
const path = require("path");
const _ = require("lodash");

const get_trackers = (req,res) => {
  User.findOne({_id: req.user._id }).then((user) => { // ARTIFICIAL IMPORT
      res.status(200).send(user.trackers)
  })
  .catch((e) => {
    console.log(e)
      res.status(400).send(e);
  })};
const get_user = (req,res) => {
  User.findOne({_id: req.user._id}).then((user) => {
      res.status(200).send(user)
  })
  .catch((e) => {
      res.status(400).send();
  })};
const post_new_user = (req,res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header("x-auth", token);
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });};
const post_login_user = (req,res,next) => {
    var { email, password } = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(email,password)
      .then((user) => {
        user.generateAuthToken()
          .then((token) => {
            req.trackers = user.trackers;
            res.header('x-auth', token)
              .status(200)
            next();
        })
    }).catch((e) => {
        res.status(400).send();
    })};
const post_court_case = (req,res) => {
  User.findOne({_id: req.user._id})
    .then((user) => {
      user.trackers.court_cases.push(req.pacer_data);
      return user.save();
    })
    .then((user) => {
      res.status(200)
          .send(user.trackers.court_cases);
    })
    .catch((e) => {
          res.status(400).send(e);
    })};
const post_tweet = (req,res) => {
    console.log(req.user._id);
    console.log(req.body);
    User.findOne({ _id: req.user._id })
        .then((user) => {
            user.trackers.tweets.push(req.body);
            return user.save();
        })
        .then((user) => {
            const new_tweet = user.trackers.tweets[user.trackers.tweets.length - 1];
            res.status(200)
                .send(new_tweet)
        })
        .catch((e) => {
            res.status(400).send(e);
        });}
const post_legislation = (req,res) => {
  let new_legislation = {
      legislation: req.body.legislation
  }
  User.findOne({_id: req.user._id})
      .then((user) => {
          user.trackers.legislation.push(req.body);
          return user.save();
      })
      .then((user) => {
          res.status(200).send(user.trackers.legislation);
      }).catch((e) => {
          res.status(400).send(e);
      });};
const delete_tweet = (req,res) => {
  const tweet_id = req.params.tweet_id;
  console.log(tweet_id);
  User.findOne({_id: req.user._id})
      .then((user) => {
          user.trackers.tweets.id(tweet_id).remove();
          return user.save();
      })
      .then((user) => {
          res.status(200).send(user.trackers.tweets);
      })
      .catch((e) => res.status(400).send(e));};
const delete_legislation = (req,res) => {
  const legislation_id = req.params.legislation_id;
  User.findOne({_id: req.user._id})
      .then((user) => {
          user.trackers.legislation.id(legislation_id).remove();
          return user.save();
      })
      .then((user) => {
          res.status(200).send(user.trackers.legislation);
      })
      .catch((e) => res.status(400).send(e));};
const delete_trackers = (req,res) => {
  User.findOne({_id: req.user._id})
      .then((user) => {
              user.trackers.legislation = [];
              user.trackers.tweets = [];
              user.trackers.court_cases = [];
          return user.save();
      })
      .then(() => User.findOne({_id: req.user._id}))
      .then((user) => {
          res.status(200).send(user.trackers)
      }).catch((e) => {
          res.status(400).send();
      });};
const delete_user = (req, res) => {
  req.user.removeToken(req.token)
    .then(() => {
      res.status(200)
      .send();
    })
    .catch((e) => {
        res.status(400).send();
     })};

const delete_court_case = (req,res) => {
  const case_id = req.params.case_id;
  User.findOne({_id: req.user._id})
      .then((user) => {
          user.trackers.court_cases.id(case_id).remove();
          return user.save();
      })
      .then((user) => {
          res.status(200).send(user.trackers.court_cases);
      })
      .catch((e) => res.status(400).send(e));}

const test = (req,res) => {
  res.send({name: "FROM EXPRESS: HARRISON'S DATA"});
};


// Middleware
const { authenticate } = require("../middleware/authenticate");
const { tweetValidator, legislationValidator, caseValidator } = require("../middleware/trackerValidators");

// Routes (exported to server)
module.exports = (app) => {
  app.get("/api/test", test)
  app.get("/api/users/me/", authenticate, get_user);
  app.get("/api/users/me/trackers", get_trackers); // Skip authentication for now...
  app.post("/api/users", post_new_user);
  app.post("/api/users/login", post_login_user, test);
  app.post("/api/users/me/trackers/court_cases", authenticate, caseValidator, post_court_case);
  app.post("/api/users/me/trackers/legislation", authenticate, legislationValidator, post_legislation);
  app.post("/api/users/me/trackers/tweets", authenticate, post_tweet); // Skip tweet validation and authentication for now...
  app.delete("/api/users/me/trackers/court_cases/:case_id", authenticate, delete_court_case);
  app.delete("/api/users/me/trackers/tweets/:tweet_id", authenticate, delete_tweet);
  app.delete("/api/users/me/trackers/legislation/:legislation_id", authenticate, delete_legislation);
  app.delete("/api/users/me/trackers", authenticate, delete_trackers);
  app.delete("/api/users/me", authenticate, delete_user);
}