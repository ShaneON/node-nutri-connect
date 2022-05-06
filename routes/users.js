const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/User');

router.get('/:id', verify, async (req, res) => {
    const user = await User.findOne({_id: req.params.id});
    res.send(user);

});

module.exports = router;