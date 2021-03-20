const router = require('express').Router()
const { Article, User } = require('../db/models')
module.exports = router

//GET /api/articles
router.get('/', async (req, res, next) => {
  try {
    const articles = await Article.findAll()
    res.json(articles)
  } catch (err) {
    next(err)
  }
})

//POST /api/articles
router.post('/', async (req, res, next) => {
  console.log('in the route')
  try {
    //Fields from the article post page
    const { title, content, category, likes, dislikes, userId } = req.body
    console.log(req.body)
    const newArticle = await Article.create(req.body)
    const user = await User.findByPk(userId)

    user.addArticle(newArticle)
    res.status(200).send('Article created')
  } catch (err) {
    next(err)
  }
})

// //GET /api/articles/:artId
router.get('/:artId', async (req, res, next) => {
  try {
    const artId = Number(req.params.artId)
    const article = await Article.findByPk(artId)
    //const userArticle = await user.getArticles();
    if (!article) return res.sendStatus(404)
    res.json(article)
  } catch (err) {
    next(err)
  }
})

//PUT /api/articles/:artId
router.put('/:artId', async (req, res, next) => {
  try {
    const artId = Number(req.params.artId)
    const artUpdating = await Article.findByPk(artId)

    if (!artUpdating) return res.sendStatus(404)
    //assuming req.body is getting what needed to be updated
    const updatedArt = await artUpdating.update(req.body)

    res.json(updatedArt)
  } catch (err) {
    next(err)
  }
})

//DELETE /api/articles/:artId
router.delete('/:artId', async (req, res, next) => {
  try {
    const artId = Number(req.params.artId)
    const article = await Article.findByPk(artId)

    if (!article) return res.sendStatus(404)
    await Article.destroy({ where: { id: artId } })
    res.status(204)
  } catch (err) {
    next(err)
  }
})
