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

router.delete('/:id', verify, async (req, res) => {
  const deletedFood = await Food.deleteOne({
    _id: req.params.id
  });
  res.send(deletedFood);
})

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
    res.send({
      _id: savedFood._id,
      name: savedFood.name,
      userId: savedFood.userId,
      kcal: savedFood.kcal,
      protein: savedFood.protein,
      fat: savedFood.fat,
      carbs: savedFood.carbs,
      sodium: savedFood.sodium,
      fiber: savedFood.fiber,
      serving: savedFood.serving,
      meal: savedFood.meal,
      dayOfYear: savedFood.dayOfYear
    });
  } catch(err) {
    res.status(400).send(err);
  }

});

module.exports = router;