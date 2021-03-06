import React from 'react'

import Article from 'components/organisms/Article'
import List from 'components/organisms/gitContent/List'
import PageLayout from 'components/templates/PageLayout'

import data from './data'

function Content() {
  return (
    <Article title={data.title}>
      <List contents={data.contents} />
    </Article>
  )
}

function Page(props) {
  return (
    <PageLayout>
      <Content {...props} />
    </PageLayout>
  )
}

export default Page
