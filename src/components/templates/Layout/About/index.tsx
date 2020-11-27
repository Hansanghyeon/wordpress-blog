import React from 'react';
import { GridThemeProvider } from 'styled-bootstrap-grid';
// Components
import Grid from '@style/Grid';
import Logo from '@atom/Logo';
import { Container, Row, Col, LogoWrap } from '../page.style';

export default function AboutContent() {
  const _Grid = {
    ...Grid,
    container: {
      maxWidth: {
        xl: 800,
      },
    },
  };
  return (
    <GridThemeProvider gridTheme={_Grid}>
      <Container>
        <Row.Header />
        <Row>
          <Col col={12} md={3}>
            <LogoWrap>
              <Logo />
            </LogoWrap>
          </Col>
          <Col col={12} md={9}>
            <p>
              <b>왜 이 블로그를 운영하고있는지</b>
              <br />
              비록 구성도 좋지않고 글도 잘못쓴 글들이 더 많지만 4log의 글들이
              누군가에게는 도움이 되고 생각을 공유해줄수있고 또한 제가 쓴 글을
              가지고 다른 사람들이 &lsquo;더 좋은 생각을 공유하게 해줄수있는
              시발점&rsquo;이 될 수 있다 생각합니다.
              <br />
              그래서 열심히 생각하고 쓰고 공유할 것입니다.
            </p>
            <p>
              <b>개인적인 성장</b>
              <br />
              글을 잘 쓰지 못하더라도 상관없다. 처음에는 글쓰는 것에 철학이
              담겨있지 않다 하지만 그런 발돋움으로 글쓰기에는 뼈대가필요하고
              철학이 필요하고 여러 요소들이 필요하다는 것을 느끼게 된다 그러니
              그냥 적어 봐야한다.
            </p>
          </Col>
        </Row>
        <Row.Divider />
        <Row>
          <Col col>
            <h3>블로그 히스토리</h3>
            <h4>네이버 블로그</h4>
            <div>
              <p>저의 경험을 공유하고 싶었습니다.</p>
              <p>
                추천할만한 맛집, 내가 알고 있는 간단한 정보들, 독후감, 영화
                감상문
              </p>
              <p>
                영화 감상문 비중이 제일 컸습니다 처음 블로그를 할 때 꿈이
                VFX였고 영화에 관련된 일들이어서 영화를 많이 보고 경험하고
                싶었고 그리고 내가 이 영화를보고 어떤 것들을 느꼇는지 기록했었죠
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col col>
            <h4>티스토리</h4>
            <div>
              <p>
                네이버 블로그를 운영하면서 블로그 스킨, 자유로운 커스텀에 이끌려
                티스토리로 이전해왔습니다.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col col>
            <h4>워드프레스</h4>
            <div>
              <p>
                워드프레스로 서비스를 제작하는 경험을 해보고 블로그 자체를
                워드프레스로 좀더 티스토리보다 자유롭게 구성하고 꾸밀수 있어서
                이전해왔습니다.
              </p>
              <p>
                티스토리와는 다르게 플러그인이라는 개념이있어서 유용한 기능들을
                플러그인을 통해서 경험할 수 있어서 이전을 결정했던 것같아요
              </p>
              <p>
                워드프레스에서는 컨텐츠를 관리하고 유저를 관리하고 여기서 멈추지
                않고 직접 필요한 유틸리티를 개발해서 사용할 수 있고 이런 부분이
                매력적이어서 계속 사용하고있습니다
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col col>
            <h4>Gatsby (React)</h4>
            <div>
              <p>
                홈페이지에서 자바스크립트를 이용한 인터렉션과 같은 재미난
                기술들을 사용하고 싶어서 React를 이용한 Gatsby에서 서비스를
                하기로 마음먹었습니다.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col col>
            <h4>Gatsby + Wordpress(Headless)</h4>
            <div>
              <p>
                컨텐츠 관리면에서 <code>*.md</code>로 관리하는 것보다 이전에
                워드프레스에서 관리하던 것이 너무나 편리하고 좋았기 때문에
                고민하였습니다.
                <br />
                이대로 워드프레스로 돌아가야 하는 것인가?{' '}
                <span aria-label="고민" role="img">
                  🤔
                </span>
                <br />
                마크다운에서 사용할 ui말고도 다른 더 다양한 ui들을 사용하고
                싶었고 또한 컨텐츠 관리또한 쉽게하고싶다 생각해서 Gatsby에서
                Graphql로 워드프레스에 데이터만 가져오는 방식인 Headless
                Wordpress라는 개념으로 자료를 찾고 구현하였습니다
              </p>
              <p>
                그래서 현재 워드프레스는 오로지 CMS로만 사용하고 내부에 커스텀
                블럭으로 여러가지 UI를 적용할 수 있는 블럭들로 컨텐츠를
                관리합니다
              </p>
            </div>
          </Col>
        </Row>
        <Row.Footer />
      </Container>
    </GridThemeProvider>
  );
}
