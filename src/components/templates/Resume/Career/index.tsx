import React from 'react';
import styled from 'styled-components';
import { FaImage } from 'react-icons/fa';
// Components
import DimSpan from '@atom/DimSpan';
import Code from '@atom/Code';
import { ImageTooltip, ImageTooltipFor, Title, Company } from './style';

const Kinsdays = () => {
  return (
    <Company>
      <h3>(주) 킨스데이즈</h3>
      <p>
        <DimSpan>웹 개발자 2018-03 ~ 2018-11</DimSpan>
      </p>
      <p>
        Vultr의 일본 및 싱가포르 서버를 구매해서 우분투 위에 <Code>Nginx</Code>{' '}
        <Code>php7.2</Code> <Code>mysql</Code>로 구성해서 wordpress
        애플리케이션을 제작하였습니다.
      </p>
      <p>카페24, 티스토리와 같이 웹으로 구성할 수있는 작업들도 하였습니다.</p>
      <div>
        <ul>
          <li>
            <Title>
              MBC 블로그
              <ImageTooltipFor>
                <FaImage data-tip data-for="mbc" />
              </ImageTooltipFor>
              <DimSpan>(2018-03)</DimSpan>
            </Title>
            <ImageTooltip id="mbc" effect="solid" aria-haspopup="true">
              <img
                src="https://wp.hyeon.pro/wp-content/uploads/mbc.png"
                alt=""
              />
            </ImageTooltip>
            <p>
              <a href="https://blog.mbc.co.kr/" target="_blank">
                https://blog.mbc.co.kr/
              </a>
            </p>
            <p>Tistory 기반의 테마를 수정하는 작업을 하였습니다.</p>
          </li>
        </ul>
      </div>
    </Company>
  );
};

const Peterosea = () => {
  return (
    <Company>
      <h3>피터오세아(peterosea)</h3>
      <p>
        <DimSpan>퍼블리셔 2018-12 ~ 2020-03</DimSpan>
      </p>
      <div>
        <Code>HTML5/CSS/JS</Code>
        <Code>Bootstrap</Code>
        <Code>ReactJS</Code>
        <Code>Next.js</Code>
        <Code>Redux.js</Code>
        <Code>AWS EC2 (APM)</Code>
        <Code>AWS Lightsail</Code>
      </div>
      <div>
        <ul>
          <li>
            <Title>코스콤 뉴스룸</Title>
            <p>
              <a
                href="http://newsroom.koscom.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://newsroom.koscom.co.kr
              </a>
            </p>
            <p>
              3일이란 시간동안 빠르게 제작해서 컴펌완료하고 배포하는 것에 중점을
              둔 프로젝트였습니다.
            </p>
          </li>
          <li>
            <Title>
              vatech eng
              <ImageTooltipFor>
                <FaImage data-tip data-for="vatecheng" />
              </ImageTooltipFor>
            </Title>
            <ImageTooltip id="vatecheng" effect="solid" aria-haspopup="true">
              <img
                src="https://wp.hyeon.pro/wp-content/uploads/4log/project/vatecheng_title.jpg"
                alt=""
              />
            </ImageTooltip>
            <p>
              <a
                href="http://www.vatecheng.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.vatecheng.com
              </a>
            </p>
            <p>
              Fullpage,js 라이브러리를 많이 숙련할 수 있게 해줬던
              프로젝트였습니다.넓이의 반응형뿐만 아니라 높이와 관련된 반응형에도
              많은 경험을 하게 해준 프로젝트였습니다
            </p>
          </li>
          <li>
            <Title>eham campus</Title>
            <p>
              <a
                href="https://github.com/peterosea/eham-campus"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/peterosea/eham-campus
              </a>
            </p>
            <p>
              워드프레스 CMS + wp-graphql 을 활용하여 뷰를 구성하는 작업에
              기여하였습니다. React를 활용한 작업에 익숙하지 않아 JLAB 회사와
              협업하여 작업하였습니다. 전체적인{' '}
              <a
                href="https://github.com/peterosea/eham-campus/tree/hyeon/demo/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                퍼블리싱 작업
              </a>{' '}
              완료
            </p>
          </li>
          <li>
            <Title>
              INR <DimSpan>(2019-09)</DimSpan>
            </Title>
            <p>
              <a
                href="http://inrcomm.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://inrcomm.com
              </a>
            </p>
            <p>
              도커를 통해 작업환경을 구성하고 퍼블리싱 작업을 완료하고
              마이그레이션 하였습니다.
            </p>
          </li>
          <li>
            <Title>
              sitech korea
              <ImageTooltipFor>
                <FaImage data-tip data-for="sitech" />
              </ImageTooltipFor>
            </Title>
            <ImageTooltip id="sitech" effect="solid" aria-haspopup="true">
              <img
                src="https://wp.hyeon.pro/wp-content/uploads/4log/project/00-1.png"
                alt=""
              />
            </ImageTooltip>
            <p>
              <a
                href="https://sitechkorea.co.kr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://sitechkorea.co.kr
              </a>
            </p>
            <p>
              FullPage 스타일의 경험을 살려 진행하였던 프로젝트였습니다.Redux를
              도입하여 옵션에 관한 상태관리를 처음으로 진행해보았습니다.
              워드프레스의 GraphQL을 사용하여 데이터 바인딩도 진행하였습니다.
              도커를 통해 워드프레스 컨테이너에서 작업을하고 마이그레이션해서
              배포하는 방식으로 구성하여 작업하였습니다.
            </p>
          </li>
          <li>
            <Title>
              포르쉐 스튜디오 청담
              <ImageTooltipFor>
                <FaImage data-tip data-for="porsche" />
              </ImageTooltipFor>
              <DimSpan>(2019-05)</DimSpan>
            </Title>
            <ImageTooltip id="porsche" effect="solid" aria-haspopup="true">
              <img
                src="https://wp.hyeon.pro/wp-content/uploads/4log/project/porsche_title.jpg"
                alt=""
              />
            </ImageTooltip>
            <p>
              <a
                href="https://www.porschestudio-cheongdam.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.porschestudio-cheongdam.com/
              </a>
            </p>
            <p>전체 퍼블리싱 제작</p>
          </li>
          <li>
            <Title>
              빌딩 스토어 <DimSpan>(2019-05)</DimSpan>
            </Title>
            <p>
              <a
                href="http://store.buildingpoint.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://store.buildingpoint.co.kr/
              </a>
            </p>
            <p>전체 퍼블리싱 제작 결제모듈은 협력사인 JLAB에서 구현하여 완성</p>
          </li>
          <li>
            <Title>
              GE Additive Day 2019 이벤트
              <DimSpan>(2019-04)</DimSpan>
            </Title>
            <p>
              <a href="" target="_blank" rel="noopener noreferrer">
                http://www.gereports.kr/ge-additive-day-2019/
              </a>
            </p>
            <p>
              이벤트성 페이지인 GE Additive Day 프로젝트를 수행하였습니다.
              <br />
              기존 워드프레스 이메일 서비스를 전체 AWS SES를 사용하고있었는데
              성능적인 면에서 제한이있다고 이야기가 있어서 이번에
              외부서비스(스티비)를 사용해보는 것이 어떨까? 제안하였습니다.
              <br />
              워드 프레스 내부의 웹훅 기능이용하고 AWS Gatway를 통해서 Stibee
              API 요청으로 구성하였습니다. 최대한 워드프레스의 기반을 손대지
              않는 방법으로 구현하려 노력하였습니다.
            </p>
          </li>
          <li>
            <Title>
              빌딩포인트 코리아
              <ImageTooltipFor>
                <FaImage data-tip data-for="sitech" />
              </ImageTooltipFor>
            </Title>
            <ImageTooltip id="sitech" effect="solid" aria-haspopup="true">
              <img
                src="https://wp.hyeon.pro/wp-content/uploads/4log/project/00.png"
                alt=""
              />
            </ImageTooltip>
            <ul>
              <li>
                <a
                  href="https://buildingpoint.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://buildingpoint.co.kr/
                </a>
              </li>
              <li>
                <a
                  href="https://sketchup.buildingpoint.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://sketchup.buildingpoint.co.kr/
                </a>
              </li>
              <li>
                <a
                  href="https://vico.buildingpoint.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://vico.buildingpoint.co.kr/
                </a>
              </li>
              <li>
                <a
                  href="https://scanner.buildingpoint.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://scanner.buildingpoint.co.kr/
                </a>
              </li>
              <li>
                <a
                  href="https://connect.buildingpoint.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://connect.buildingpoint.co.kr/
                </a>
              </li>
              <li>
                <a
                  href="https://layout.buildingpoint.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://layout.buildingpoint.co.kr/
                </a>
              </li>
            </ul>
            <p>
              기존 운영 중이던 워드프레스 사이트를 같은 디자인의 구성으로 다른
              상품들의 홈페이지를 제작하였습니다. 기존 중첩이 많이 되던 코드를
              리팩토링하는데 중점을 두고 클라이언트의 만족성을 우선시하여
              작업하였습니다.
            </p>
          </li>
          <li>
            <Title>
              intonomad 인투노마드 <DimSpan>(2018-12)</DimSpan>
            </Title>
            <p>
              <a
                href="https://intonomad.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://intonomad.com/
              </a>
            </p>
            <p>
              이미 어느정도 틀이 잡혀있는 것 위에서 각 UI들을
              퍼블리싱하였습니다. 워드프레스 개발사 단비와 협력하여 해당
              프로젝트를 완료하였습니다.
            </p>
          </li>
        </ul>
      </div>
    </Company>
  );
};

const CareerWrap = styled.div`
  a {
    color: ${({ theme }) => theme.palette.primary};
    &:visited {
      color: ${({ theme }) => theme.palette.text[2]};
    }
  }
`;
const Career = () => {
  return (
    <CareerWrap>
      <h2>업무 경험</h2>
      <p>총 2년 1개월</p>
      <Peterosea />
      <Kinsdays />
    </CareerWrap>
  );
};

export default Career;
