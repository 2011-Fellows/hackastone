import axios from 'axios'
import React, { useEffect, useReducer } from 'react'


const dummyData = {
  firstName: 'Kelsey',
  lastName: 'Schroeder',
  email: 'kelsey@gmail.com',
  articles: [
    {
      title: 'Subset Sum',
      content:
        '{"time":1613786130244,"blocks":[{"type":"paragraph","data":{"text":"&nbsp; &nbsp; &nbsp; Given a target sum and an array of positive integers, return true if any combination of numbers in the array can add to the target. Each number in the array may only be used once. Return false if the numbers cannot be used to add to the target sum."}},{"type":"paragraph","data":{"text":"&nbsp; &nbsp; &nbsp; With dynamic programming techniques—i.e. recognizing overlapping subproblems and avoiding repeated work—we can optimize this to O(n*m) where n is the target number and m is the size of the array of possible numbers to draw from. Both solutions below fall under the banner of dynamic programming. We can have an optimized bottom-u solution that is iterative. One approach is to accumulate a set of possible sums starting from 0. We could loop through each given number and add it to every number already in the set. We can then include each of these new possibilities into the possible sums set"}},{"type":"code","data":{"code":"console.log(hello world)"}}],"version":"2.19.1"}',
      category: 'algo',
      id: 1
    },
    {
      title: 'Web Data Flow',
      content:
        '{"time":1613786346560,"blocks":[{"type":"paragraph","data":{"text":"A popular question in first interviews like on Launch Day is What happens when I type [website address] and click enter? Its a good conversation that can take up a good duration of time and show your technical communication chops. Its also very good to know what the process is like to get something like wikipedia.com on our screens"}}],"version":"2.19.1"}',
      category: 'technology',
      id: 2
    }
  ]
}

interface dataObj {
  text: string
}

interface blockObj {
  type: string
  data: { [key: string]: dataObj }
}

interface contentObj {
  time: number
  blocks: Array<{ [key: string]: blockObj }>
  version: string
}

const SET_USER: string = 'SET_USER'

function profileReducer(state = {}, action: { type: any; user: any }){
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}


export default function Profile(props) {
  const [state, dispatch] = useReducer(profileReducer, {
    user: {},
    articles: []
  })
  
  const articles = state.articles
  const profileInfo = state.user

  async function getProfileInfo(userId){
    try {
      const res = await axios.get(`/api/users/${userId}`)
      const userInfo = res.data
      dispatch({ type: SET_USER, user: userInfo })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() =>{
    getProfileInfo(props.match.params.userId)
  }, [props.match.params.userId])

  return (
    <div>
      <h2>{profileInfo.firstName}</h2>
      <h3>{profileInfo.email}</h3>
      <h3>Your Articles</h3>
      {articles.length ? (
        articles.map(
          (article: {
            content: string
            id: string | number | null | undefined
            title: String
            category: String
          }) => {
            const content = JSON.parse(article.content)
            const time = new Date (content.time).toDateString()
            return (
              <div key={article.id}>
                <p>Title: {article.title}</p>
                <p>Category: {article.category}</p>
                <p>Date: {time}</p>
              </div>
            )
          })
      ) : (
        <p>No articles Found</p>
      )}
    </div>
  )
}