const router = require('express').Router();
const { User } = require('../db/models');
module.exports = router;

//GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//POST /api/users
router.post('/', async (req, res, next) => {
  try {
    //Fields from the sign up page
    const { firstName, lastName, email, password, status } = req.body;
    await User.create(req.body);
    res.status(200).send('User created');
  } catch (err) {
    next(err);
  }
});

//GET /api/users/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const user = await User.findByPk(userId, {
      attributes: ['id', 'firstName', 'email'],
    });
    const userArticle = await user.getArticles();
    if (!user) return res.sendStatus(404);
    res.json({ user: user, articles: userArticle });
  } catch (err) {
    next(err);
  }
});
//PUT /api/users/:userId
router.put('/:userId', async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);

    const userUpdating = await User.findByPk(userId);

    if (!userUpdating) return res.sendStatus(404);
    //assuming req.body is getting what needed to be updated
    const updatedUser = await userUpdating.update(req.body);

    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

//DELETE /api/users/:userId
router.delete('/:userId', async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const user = await User.findByPk(userId);

    if (!user) return res.sendStatus(404);
    await User.destroy({ where: { id: userId } });
    res.status(204);
  } catch (err) {
    next(err);
  }
});
