var { User } = require("../models/user");
const path = require("path");
const axios = require("axios");
const config = require("../config/config.js");

tweetValidator = function(req, res, next){
   var new_handle = req.body.handle;
    var re = /^@?(\w){1,15}$/;
    if(re.test(new_handle)){
        var url = `https://twitter.com/${new_handle}`;
        axios.get(url)
            .then((response) => {
                console.log(`${new_handle} is a valid twitter handle.`)
                next();
            })
            .catch((error) => {
                if(error.response.status === 404){
                     res.status(400)
                        .send("That handle could not be found.")
                } else {
                    res.status(400)
                        .send("Something is wrong.")
                }
            });
    } else {
        res.status(400).send("That is not a valid twitter handle.")
    }
};

legislationValidator = function(req, res, next){
   next();
};

caseValidator = function(req, res, next){
    var case_id = req.body.case_id;
    var authOptions = {
        method: 'GET',
        url: `https://www.courtlistener.com/api/rest/v3/dockets/${case_id}/`,
        headers: {
            'Authorization' : process.env.RECAP_KEY
        },
        json: true
    };
    axios(authOptions)
        .then((response) => {
            console.log("YEP")
            req.pacer_data = response.data;
            req.pacer_url = `https://www.courtlistener.com${response.data.absolute_url}`;
            next();

            //// Pass in the JSON data to the next middleware?
        })
        .catch(() => {
            console.log("NOPE")
            res.status(400)
               .send("No court case found.");
        });
};

module.exports = {
    tweetValidator,
    legislationValidator,
    caseValidator
}