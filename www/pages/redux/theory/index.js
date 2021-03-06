import React from 'react'

import useAnchorLinks from 'components/utils/hooks/useAnchorLinks'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import Article from 'components/organisms/Article'
import PageLayout from 'components/templates/PageLayout'

const TITLES = ['Redux là gì ?', 'Ba nguyên tắc của Redux', 'Các yếu tố của Redux']

function Content() {
  useAnchorLinks(TITLES)
  return (
    <Article title="Theory">
      <Paper>
        <AnchorLinkHeading>{TITLES[0]}</AnchorLinkHeading>
        <Spacer />
        <Text size="large">
          Là một <mark>JavaScript library</mark>, Redux is a predictable state container for
          JavaScript apps.
        </Text>
      </Paper>
      <Spacer />
      <Paper>
        <AnchorLinkHeading>{TITLES[1]}</AnchorLinkHeading>
        <Spacer />
        <Text size="large">
          <strong>Single source of truth:</strong> <code>state</code> của toàn bộ ứng dụng của bạn
          được lưu trữ trong một <mark>object tree</mark> trong một <code>store</code>.
        </Text>
        <Spacer size="small" />
        <Text size="large">
          <strong>State is read-only:</strong> Không thể thay đổi <code>state</code> trực tiếp,
          <code>state</code> chỉ có thể được thay đổi bằng cách <code>dispatch action</code> đến{' '}
          <code>store</code>.
        </Text>
        <Spacer size="small" />
        <Text size="large">
          <strong>Changes are made with pure functions:</strong> Hàm thay đổi <code>state</code> gọi
          là <code>reducer</code> là một pure function
        </Text>
      </Paper>
      <Spacer />
      <Paper>
        <AnchorLinkHeading>{TITLES[2]}</AnchorLinkHeading>
        <Text size="large">
          Action
          <br />
          Action Creator
          <br />
          Reducer
          <br />
          Store
          <br />
          Middleware
        </Text>
      </Paper>
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
