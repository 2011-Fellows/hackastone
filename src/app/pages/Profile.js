import React from 'react'

const dummyData = {
    firstName: 'Kelsey',
    lastName: 'Schroeder',
    email: 'kelsey@gmail.com',
    articles: [
    {
        title: 'Subset Sum',
        content:'{"time":1613786130244,"blocks":[{"type":"paragraph","data":{"text":"&nbsp; &nbsp; &nbsp; Given a target sum and an array of positive integers, return true if any combination of numbers in the array can add to the target. Each number in the array may only be used once. Return false if the numbers cannot be used to add to the target sum."}},{"type":"paragraph","data":{"text":"&nbsp; &nbsp; &nbsp; With dynamic programming techniques—i.e. recognizing overlapping subproblems and avoiding repeated work—we can optimize this to `O(n*m)` where `n` is the target number and `m` is the size of the array of possible numbers to draw from. Both solutions below fall under the banner of dynamic programming. We can have an optimized \'bottom-up\' solution that is iterative. One approach is to accumulate a set of possible sums starting from 0. We could loop through each given number and add it to every number already in the set. We can then include each of these new possibilities into the possible sums set"}},{"type":"code","data":{"code":"console.log(\"hello world\")"}}],"version":"2.19.1"}',
        category: 'algo',
        id:1
      },
      {
        title: 'Web Data Flow',
        content: '{"time":1613786346560,"blocks":[{"type":"paragraph","data":{"text":"A popular question in first interviews like on Launch Day is \'What happens when I type [website address] and click enter?\' It\'s a good conversation that can take up a good duration of time and show your technical communication chops. It\'s also very good to know what the process is like to get something like wikipedia.com on our screens"}}],"version":"2.19.1"}',
        category: 'technology',
        id: 2
      }]
}

export default function Profile(){
    const articles = dummyData.articles.sort((a,b) => a.id - b.id)
    return (
        <div>
            <h2>{dummyData.firstName} {dummyData.lastName}</h2>
            <h3>{dummyData.email}</h3>
            <h3>Your Articles</h3>
            {articles.length ? articles.map(article => {
                const content = JSON.parse(article.content)
                console.log(content)
                const time = Date(content.time)
            return (
                <div key={article.id}>
                    <p>Title: {article.title}</p>
                    <p>Category: {article.category}</p>
                    <p>Date: {time}</p>
                </div>
            )}): <p>No articles Found</p>}
        </div>
    )
}