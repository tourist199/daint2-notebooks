import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { JsIcon, HtmlIcon, CssIcon } from 'components/atoms/Icon/languages'
import StickySocialBar from 'components/molecules/StickySocialBar'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const LandingPage = () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
    <div className={cssModules`container`}>
      <div className={cssModules`information`}>
        <h1>DaiNT2 notebooks</h1>
        <p>
          My name is Nguyen Tran Dai. I am a Front-end Web Developer. I have a passion with
          front-end technologies. When I have free time, I often read, study and share my knowledge
          for everyone.
        </p>
        <a href="#content">Get Started</a>
      </div>
    </div>
    <div id="content" className={cssModules`content`}>
      <Link href="/js/array">
        <div className={cssModules`box`}>
          <div className={cssModules`box-content`}>
            <JsIcon width={75} height={75} />
            <h3>JavaScript (Js)</h3>
            <a href="/js/array">Read More</a>
          </div>
        </div>
      </Link>
      <Link href="#">
        <div className={cssModules`box`}>
          <div className={cssModules`box-content`}>
            <HtmlIcon width={75} height={75} />
            <h3>HyperText Markup Language (Html)</h3>
            <a href="#">Read More</a>
          </div>
        </div>
      </Link>
      <Link href="/css/flexbox">
        <div className={cssModules`box`}>
          <div className={cssModules`box-content`}>
            <CssIcon width={75} height={75} />
            <h3>Cascading Style Sheets (Css)</h3>
            <a href="/css/flexbox">Read More</a>
          </div>
        </div>
      </Link>
    </div>
    <StickySocialBar />
  </div>
)

export default LandingPage
