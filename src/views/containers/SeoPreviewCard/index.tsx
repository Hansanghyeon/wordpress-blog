import React from 'react';
import SeoPreviewCard from '@atom/card/SeoPreview';
import Link from '@atom/Link';
import useRequest from '@utile/useRequest';

export default (url: string) => {
  const [response, loading, error] = useRequest(
    `${
      process.env.NODE_ENV === 'production'
        ? 'https://api.nas.hapas.io'
        : 'http://localhost:8080'
    }/seo/?url=${encodeURI(url)}`,
  );
  if (loading) return <SeoPreviewCard loading={loading} reqUrl={url} />;
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
    reqUrl: url,
  };
  return <SeoPreviewCard {...props} />;
};
