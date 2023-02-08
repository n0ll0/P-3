var express = require('express');
var router = express.Router();

const Questions = [
  {
    "head": "Are you healthy?",
    "id": "healthy"
  },
  {
    "head": "Are you?",
    "id": "again"
  },

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {questions: Questions});
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.render('result', { result: req.body});
});

module.exports = router;
