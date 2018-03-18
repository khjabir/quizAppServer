var mongoose = require('mongoose');
var quizSchema = new mongoose.Schema({
	Question: String,
	OptionA: String,
	OptionB: String,
	OptionC: String,
	OptionD: String,
	Answer: Number
});

mongoose.model('Quiz', quizSchema, 'Quiz'); 