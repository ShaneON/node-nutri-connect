const router = require('express').Router();
const verify = require('./verifyToken');
const Food = require('../model/Food');

router.get('/', verify, async (req, res) => {
    const food = await Food.find({
      userId: req.query.userId, 
      dayOfYear: req.query.dayOfYear
    });
    res.send(food);
});

router.post('/', verify, async (req, res) => {
  const food = new Food({
    name: req.body.name,
    userId: req.body.userId,
    kcal: req.body.kcal,
    protein: req.body.protein,
    fat: req.body.fat,
    carbs: req.body.carbs,
    sodium: req.body.sodium,
    fiber: req.body.fiber,
    serving: req.body.serving,
    meal: req.body.meal,
    dayOfYear: req.body.dayOfYear
  });

  try {
    const savedFood = await food.save();
    res.send({food: food._id});
  } catch(err) {
    res.status(400).send(err);
  }

});

module.exports = router;