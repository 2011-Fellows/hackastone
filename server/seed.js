const db = require('./db/db')
const { green, red } = require('chalk')
const faker = require('faker')
const { User, Article } = require('./db/models')

const users = [
  {
    firstName: 'Katya',
    lastName: 'Serga',
    email: 'katya@gmail.com',
    password: 123,
    status: 'admin'
  },
  {
    firstName: 'Kathryn',
    lastName: 'Lam',
    email: 'kathryn@gmail.com',
    password: 123
  }
]

const articles = [
  {
    title: 'Subset Sum',
    content:
      'Given a target sum and an array of positive integers, return true if any combination of numbers in the array can add to the target. Each number in the array may only be used once. Return false if the numbers cannot be used to add to the target sum.',
    category: 'algo'
  },
  {
    title: 'Solution Subset Sum',
    content:
      "With dynamic programming techniques—i.e. recognizing overlapping subproblems and avoiding repeated work—we can optimize this to `O(n*m)` where `n` is the target number and `m` is the size of the array of possible numbers to draw from. Both solutions below fall under the banner of dynamic programming. We can have an optimized 'bottom-up' solution that is iterative. One approach is to accumulate a set of possible sums starting from 0. We could loop through each given number and add it to every number already in the set. We can then include each of these new possibilities into the possible sums set",
    category: 'algo'
  },
  {
    title: 'Web Data Flow',
    content:
      "A popular question in first interviews like on Launch Day is 'What happens when I type [website address] and click enter?' It's a good conversation that can take up a good duration of time and show your technical communication chops. It's also very good to know what the process is like to get something like wikipedia.com on our screens",
    category: 'technology'
  }
]

const seed = async () => {
  try {
    await db.sync({ force: true })

    // Users
    const seededUsers = await User.bulkCreate(users)
    console.log(green('Seeded users'))

    // Articles
    const seededArticles = await Article.bulkCreate(articles)
    console.log(green('Seeded articles'))
    await seededUsers[0].setArticles(seededArticles[0])

    console.log(green('Database sucessfully seeded'))
    db.close()
  } catch (error) {
    console.log(red('Error seeding database'))
    console.log(error.stack)
    db.close()
  }
}

seed()
