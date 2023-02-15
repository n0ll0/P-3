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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {questions: Questions});
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.render('result', { result: req.body});
});

module.exports = router;
