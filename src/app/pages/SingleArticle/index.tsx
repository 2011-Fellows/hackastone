import * as React from 'react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import axios from 'axios'

export function SingleArticle() {
  //write axios call to get single article using article ID
  //set up react hook to componentDidMount using axios call
  //edit link to refer to article id
  const [singleArticle, setSingleArticle] = useState({})

  useEffect(() => {
    fetchSingleArticle(1)
  })

  const fetchSingleArticle = async (artId) => {
    try {
      const { data } = await axios.get(`/api/articles/${artId}`)
      console.log('this is the dattaaa: ', data)
      // setSingleArticle(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Helmet>
        <title>My Article Page</title>
        <meta name="description" content="View a blog post" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        {/* <p>Title: ${singleArticle.title}</p> */}
        <p></p>
        <p></p>
        <button onClick={() => alert('Edit article coming soon!')}>Edit</button>
      </PageWrapper>
    </>
  )
}
