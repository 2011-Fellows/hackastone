import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import styled from 'styled-components/macro'

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

function profileReducer(state = {}, action: { type: String; user: any }) {
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

  async function getProfileInfo(userId) {
    try {
      const res = await axios.get(`/api/users/${userId}`)
      const userInfo = res.data
      dispatch({ type: SET_USER, user: userInfo })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProfileInfo(props.userId)
  }, [props.userId])

  return (
    <Wrapper>
      <Title>{profileInfo.firstName}</Title>
      <h2>{profileInfo.email}</h2>
      <Articles>
        {articles.length ? (
          articles.map(
            (article: {
              content: string
              id: string | number | null | undefined
              title: String
              category: String
            }) => {
              const content: contentObj = JSON.parse(article.content)
              const time = new Date(content.time).toDateString()
              return (
                <div key={article.id}>
                  <h3>Title: {article.title}</h3>
                  <p>Published: {time}</p>
                  <p>Category: {article.category}</p>
                </div>
              )
            }
          )
        ) : (
          <p>No articles Found</p>
        )}
      </Articles>
    </Wrapper>
  )
}

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${(p) => p.theme.text};
  margin: 1rem 0;
`

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`

const Articles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
`
