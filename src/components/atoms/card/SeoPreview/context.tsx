import React from 'react';
import SeoPreviewCard from '@atom/card/SeoPreview';
import Link from 'next/link';
import useRequest from '@hook/useRequest';

export default (url: string) => {
  const [response, loading, error] = useRequest(
    `${
      process.env.NODE_ENV !== 'production'
        ? 'https://api.nas.hyeon.pro/seo'
        : 'http://localhost:40000'
    }/?m_url=${encodeURI(url)}`,
  );
  if (loading) return <SeoPreviewCard loading={loading} mUrl={url} />;
  if (error)
    return (
      <div>
        <Link href={url}>
          <a>{decodeURI(url)}</a>
        </Link>
      </div>
    );
  if (!response) return null;
  const { data } = response;
  const props = {
    data,
    loading,
    mUrl: decodeURI(url),
  };
  if (data === undefined) {
    return (
      <div>
        <Link href={url}>
          <a>{decodeURI(url)}</a>
        </Link>
      </div>
    );
  }
  return <SeoPreviewCard {...props} />;
};
