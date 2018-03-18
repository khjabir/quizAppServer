var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))

router.route('/')
    .get(function(req, res, next) {
        mongoose.model('Quiz').find({}, function (err, questions) {
			if (err) {
				return console.error(err);
			} else {
				res.send(questions);
			}     
        });
    })


    .post(function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        var question = req.body.question;
        var optionA = req.body.optionA;
        var optionB = req.body.optionB;
        var optionC = req.body.optionC;
        var optionD = req.body.optionD;
        var answer = req.body.answer;
        //call the create function for our database
        mongoose.model('Quiz').create({
            Question: question,
			OptionA: optionA,
			OptionB: optionB,
			OptionC: optionC,
			OptionD: optionD,
			Answer: answer
        }, function (err, quiz) {
              if (err) {
                  res.send("There was a problem adding the information to the database.");
                  res.send('Error');
              } else {
                  console.log('Insertion Success');
                  res.send('OK');
              }
        })
    });

module.exports = router;
