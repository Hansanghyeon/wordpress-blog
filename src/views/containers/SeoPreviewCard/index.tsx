import React from 'react';
import SeoPreviewCard from '@atom/card/SeoPreview';
import Link from '@atom/Link';
import useRequest from '@utile/useRequest';

export default (url: string) => {
  const [response, loading, error] = useRequest(
    `${
      process.env.NODE_ENV === 'production'
        ? 'https://api.nas.hyeon.pro/seo'
        : 'http://localhost:40000'
    }/?m_url=${encodeURI(url)}`,
  );
  if (loading) return <SeoPreviewCard loading={loading} mUrl={url} />;
  if (error)
    return (
      <div>
        <Link href={url}>{decodeURI(url)}</Link>
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
        <Link href={url}>{decodeURI(url)}</Link>
      </div>
    );
  }
  return <SeoPreviewCard {...props} />;
};
