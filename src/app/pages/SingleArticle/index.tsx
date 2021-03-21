import * as React from 'react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import axios from 'axios'

// interface singleArticleData {
//   category: string
//   content: string
//   date: any
//   id: number
//   dislikes: number
//   likes: number
//   title: string
//   userId: string
// }

export function SingleArticle({ match }) {
  const [singleArticle, setSingleArticle] = useState({
    category: '',
    content: '',
    date: '',
    id: '',
    dislikes: '',
    likes: '',
    title: '',
    userId: ''
  })

  useEffect(() => {
    fetchSingleArticle(match.params.id)
  }, [])

  const fetchSingleArticle = async (artId) => {
    try {
      const { data } = await axios.get(`/api/articles/${artId}`)
      setSingleArticle(data)
      console.log('in fetch')
    } catch (error) {
      console.log(error)
    }
  }
  console.log('THIS IS SINGLE ARTICLE', singleArticle)

  // let displayContent = ''

  // const parseContent = (contentData) => {
  //   const parsedContent = JSON.parse(contentData.content)
  //   console.log('parsed contentttt', parseContent)
  //   return parsedContent
  // }
  // singleArticle && singleArticle.content
  //   ? (displayContent = parseContent(singleArticle))
  //   : (displayContent = 'Loading')

  // CURRENT ISSUE: content is saved as "text", but the data type is an object with nested objects that hold the actual content data. Not sure how we want to display this. Options considered:
  // 1. Save in DB as alternate data type? Objects shouldn't be stored in DB, and parsing may be an issue
  // 2. Save text only from editor js, instead of saving entire object?
  // 3. Neither of these seem like good options.

  return (
    <>
      <Helmet>
        <title>My Article Page</title>
        <meta name="description" content="View a blog post" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <p>Title: {singleArticle.title}</p>
        <p>Category: singleArticle.category</p>
        <p>Content: {singleArticle.content}</p>
        <button onClick={() => alert('Edit article coming soon!')}>Edit</button>
      </PageWrapper>
    </>
  )
}
