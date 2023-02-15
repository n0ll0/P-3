var express = require('express');
var router = express.Router();

const Questions = [
  'Color preference?',
  'Adventure or relaxation?',
  'Spontaneous or planned?',
  'Books or movies?',
  'Early bird or night owl?',
  'City or countryside?',
  'Alone or social time?', 
  'Pizza or sushi?',
  'Summer or winter?',
  'Music or silence?',
];

personalities = [
  {"type": "adventurer", "description": "You are always seeking new experiences and challenges. You are confident and fearless, and you are never afraid to take risks."},
  {"type": "philosopher", "description": "You have a deep appreciation for the intricacies of life, and you enjoy contemplating its meaning and purpose. You are introspective and often seek to understand the world around you."},
  {"type": "realist", "description": "You are practical and grounded, and you are always looking for solutions to the problems that you encounter. You are decisive and unafraid to tackle the challenges that life throws your way."},
  {"type": "romantic", "description": "You are passionate and emotional, and you believe in the power of love and connection. You are often drawn to creative pursuits and seek to express your emotions through art, music, or writing."},
  {"type": "idealist", "description": "You have high standards and strong values, and you are always striving to make the world a better place. You are driven by a sense of purpose and are always looking for ways to make a positive impact."},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {questions: Questions});
});

router.post('/', function(req, res, next) {
  var personality = personalities[Math.floor(Math.random() * personalities.length)];
  res.render('result', { result: req.body, personality: personality});
});

module.exports = router;
