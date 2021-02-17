import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import { EditBlog } from 'app/components/EditBox'

export function EditPage() {
  return (
    <>
      <Helmet>
        <title>Edit Blog Page</title>
        <meta name="description" content="Create or edit a blog post" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <EditBlog />
      </PageWrapper>
    </>
  )
}
