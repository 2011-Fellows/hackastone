import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import Profile from './Profile'

export default function ProfilePage(props) {
  return (
    <>
      <Helmet>
        <title>Profile Page</title>
        <meta
          name="description"
          content="A list of all post published by you"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Profile userId={props.match.params.userId} />
      </PageWrapper>
    </>
  )
}
