import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

function About() {
  return (
    <IndexLayout>
      <Helmet>
        <title>남해 스카이캐슬</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={true} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">스카이캐슬에 대해<br></br>더 자세히 알고 싶으시다면</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  
                  <h3>
                    <a href="https://map.naver.com/p/search/%EB%82%A8%ED%95%B4%EC%9D%8D%20%ED%99%94%EC%A0%84%EB%A1%9C%20122%EB%B2%88%EA%B8%B8%2037-26/address/14237519.5837125,4142750.109334,%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EB%82%A8%ED%95%B4%EA%B5%B0%20%EB%82%A8%ED%95%B4%EC%9D%8D%20%ED%99%94%EC%A0%84%EB%A1%9C122%EB%B2%88%EA%B8%B8%2037-26,new?c=19.00,0,0,0,dh&isCorrectAnswer=true">오시는 길 : 남해읍 화전로 122번길 37-26</a>
                  </h3>
                  
                  <h3>
                    <a href='tel:010-5367-8091'>연락처 : 010-5367-8091</a>
                  </h3>
                  <h3>
                    <a href='https://m.blog.naver.com/PostView.naver?blogId=oksen2&logNo=223293756800&navType=by'>네이버 블로그</a>
                  </h3>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
}

export default About;
