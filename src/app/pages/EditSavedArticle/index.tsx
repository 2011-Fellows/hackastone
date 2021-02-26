import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import { EditSavedArticle } from 'app/components/EditBox/editArticle'

export function EditSaved() {
  return (
    <>
      <Helmet>
        <title>Edit Blog Page</title>
        <meta name="description" content="Create or edit a blog post" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <EditSavedArticle />
      </PageWrapper>
    </>
  )
}
