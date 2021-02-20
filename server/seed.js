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
    content:'{"time":1613786130244,"blocks":[{"type":"paragraph","data":{"text":"&nbsp; &nbsp; &nbsp; Given a target sum and an array of positive integers, return true if any combination of numbers in the array can add to the target. Each number in the array may only be used once. Return false if the numbers cannot be used to add to the target sum."}},{"type":"paragraph","data":{"text":"&nbsp; &nbsp; &nbsp; With dynamic programming techniques—i.e. recognizing overlapping subproblems and avoiding repeated work—we can optimize this to `O(n*m)` where `n` is the target number and `m` is the size of the array of possible numbers to draw from. Both solutions below fall under the banner of dynamic programming. We can have an optimized \'bottom-up\' solution that is iterative. One approach is to accumulate a set of possible sums starting from 0. We could loop through each given number and add it to every number already in the set. We can then include each of these new possibilities into the possible sums set"}},{"type":"code","data":{"code":"console.log(\"hello world\")"}}],"version":"2.19.1"}',
    category: 'algo'
  },
  {
    title: 'Web Data Flow',
    content: '{"time":1613786346560,"blocks":[{"type":"paragraph","data":{"text":"A popular question in first interviews like on Launch Day is \'What happens when I type [website address] and click enter?\' It\'s a good conversation that can take up a good duration of time and show your technical communication chops. It\'s also very good to know what the process is like to get something like wikipedia.com on our screens"}}],"version":"2.19.1"}',
    category: 'technology'
  },
  {
    title: 'Default JSON object',
    content: '{"time":1613784301531,"blocks":[{"type":"paragraph","data":{"text":"I wrote this text earlier!"}},{"type":"paragraph","data":{"text":"This is also from earlier, but in a separate block!"}}],"version":"2.19.1"}',
    category: 'project'
  },
  {
    title: 'Bacon',
    content: '{"time":1613784866448,"blocks":[{"type":"paragraph","data":{"text":"Bacon ipsum dolor amet picanha filet mignon swine kielbasa shoulder alcatra shankle sausage. Shoulder filet mignon sirloin, hamburger short ribs porchetta ground round ham hock jerky turkey pork belly beef ribs shankle. Meatloaf ribeye shank, pancetta chislic meatball hamburger turducken tenderloin ball tip andouille cupim pig beef ribs beef. Tri-tip pork loin buffalo pancetta meatball bresaola. Tongue leberkas tenderloin, ribeye ground round pork loin t-bone filet mignon tri-tip ball tip. Andouille sirloin jowl picanha landjaeger turducken shank kevin t-bone corned beef turkey biltong rump fatback pork chop. Venison andouille meatball, doner alcatra ribeye jerky rump burgdoggen."}},{"type":"paragraph","data":{"text":"Shank bresaola jowl ground round turkey picanha burgdoggen beef ribs jerky t-bone prosciutto turducken swine pig shankle. Andouille kevin pancetta, pastrami bacon turkey prosciutto sausage turducken venison hamburger chuck. Tongue shankle salami cupim tri-tip picanha landjaeger chislic boudin shoulder frankfurter. Ribeye porchetta ball tip shoulder pork chop. Buffalo pork belly fatback sirloin chislic boudin, pastrami leberkas jowl tail venison ham. Cow biltong tenderloin ham hock tri-tip."}},{"type":"paragraph","data":{"text":"Kevin short loin shankle tail, buffalo andouille bresaola strip steak. Bresaola capicola meatball corned beef cupim ribeye. Frankfurter pork loin tri-tip picanha chicken doner. Brisket chicken capicola frankfurter pork chop rump boudin drumstick. Porchetta corned beef pork chop, meatloaf cow boudin leberkas short ribs drumstick pork loin biltong sausage tenderloin salami. Jowl kevin ham pastrami meatloaf. Landjaeger tenderloin shoulder, hamburger rump porchetta ham doner cow alcatra."}},{"type":"paragraph","data":{"text":"Burgdoggen chislic sausage filet mignon alcatra t-bone shank. Landjaeger pig andouille, ribeye jowl drumstick fatback cow porchetta leberkas picanha hamburger t-bone shank ham. Pork belly biltong venison, pastrami t-bone andouille shank prosciutto porchetta boudin tri-tip bacon. Burgdoggen short ribs meatloaf jowl turducken kielbasa chuck buffalo shankle. Hamburger tri-tip beef drumstick kevin chislic pastrami ham boudin ham hock. Fatback burgdoggen tail sirloin pork loin. Pork boudin turducken pastrami cupim ground round, beef ribs short ribs spare ribs doner beef."}},{"type":"paragraph","data":{"text":"Shankle strip steak tail ball tip. Brisket sausage jerky, andouille corned beef bresaola fatback chuck ribeye salami. Pancetta drumstick t-bone sausage, porchetta fatback pastrami rump leberkas. Biltong bresaola filet mignon prosciutto leberkas strip steak swine ham hock pancetta doner."}}],"version":"2.19.1"}',
    category: 'project'
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
