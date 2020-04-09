import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
import './index.style.scss';
// Components
import NonFavicon from '@atom/icons/NonFavicon';
import CpuChipLoader from '@atom/loader/CpuChip';

const Header = styled.div`
  background-color: ${({ theme }) => theme.color.bg[0]};
`;
const Favicon = styled.div``;
const Body = styled(Row)`
  background-color: ${({ theme }) => theme.color.bg[1]};
  color: ${({ theme }) => theme.color.text[2]};
`;
const Url = styled.div``;
const ImageCol = styled(Col)<styleProps>`
  background-image: ${({ bg }) => `url(${bg})`};
`;
const Content = styled(Col)``;
const RootWrap = styled.a`
  ${Row} {
    margin-left: 0;
    margin-right: 0;
  }
  &:hover {
    ${Header} {
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.bg[1]};
    }
    ${Body} {
      color: ${({ theme }) => theme.color.text[1]};
      border: 1px solid ${({ theme }) => theme.color.text[2]};
    }
  }
`;

const Loaded = ({ data, mUrl }: reqData) => {
  const { title, description, favicon, image } = data;
  return (
    <>
      <Header className="_header">
        <Favicon className="_favicon">
          {favicon ? <img src={favicon} alt="" /> : <NonFavicon />}
        </Favicon>
        <div>{title}</div>
      </Header>
      <Body className="_body">
        <Content col className="_content">
          <div className="_description">{description}</div>
          <Url className="_url">{mUrl}</Url>
        </Content>
        {image && <ImageCol col={12} sm={4} bg={image} className="_thumnail" />}
      </Body>
    </>
  );
};
const Loading = () => (
  <>
    <Header className="_header">
      <Favicon className="_favicon">
        <NonFavicon />
      </Favicon>
      <div>Loading...</div>
    </Header>
    <Body className="_body">
      <Col col className="_content">
        <CpuChipLoader />
      </Col>
    </Body>
  </>
);

const SeoPreviewCard = ({ data, loading, mUrl }: props) => {
  return (
    <RootWrap href={mUrl} className={`seoPreview ${loading && 'loading'}`}>
      {!loading ? <Loaded data={data} mUrl={mUrl} /> : <Loading />}
    </RootWrap>
  );
};

export default SeoPreviewCard;
interface styleProps {
  bg?: string;
}
interface reqData {
  data?: {
    title: string;
    description: string;
    image: string;
    favicon: string;
    url: string;
  };
  mUrl: string;
}
interface props extends reqData {
  loading: boolean;
}
