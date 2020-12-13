import React from 'react';
import Link from 'next/link';
// components
import NonFavicon from '@atom/icons/NonFavicon';
import CpuChipLoader from '@atom/loader/CpuChip';
import { Col, Row, Header, Favicon, Url, RootWrap, Description } from './style';

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

const Loaded = ({ data, mUrl }: reqData) => {
  if (data === undefined) return <></>;
  const { title, description, favicon, image } = data;
  return (
    <>
      <Header>
        <Favicon>
          {favicon ? <img src={favicon} alt="" /> : <NonFavicon />}
        </Favicon>
        <div>{title}</div>
      </Header>
      <Row.Body>
        <Col.Content col>
          <Description>{description}</Description>
          <Url>{mUrl}</Url>
        </Col.Content>
        {image && <Col.Image col={12} sm={4} bg={image} />}
      </Row.Body>
    </>
  );
};

const Loading = () => (
  <>
    <Header>
      <Favicon>
        <NonFavicon />
      </Favicon>
      <div>Loading...</div>
    </Header>
    <Row.Body>
      <Col.Def col>
        <CpuChipLoader />
      </Col.Def>
    </Row.Body>
  </>
);

const SeoPreviewCard = ({ data, loading, mUrl }: props) => {
  return (
    <Link href={mUrl}>
      <RootWrap>
        {!loading ? <Loaded data={data} mUrl={mUrl} /> : <Loading />}
      </RootWrap>
    </Link>
  );
};

export default SeoPreviewCard;
