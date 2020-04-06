import React from 'react';
import SeoPreviewCard from '@atom/card/SeoPreview';
import Link from '@atom/Link';
import useRequest from '@utile/useRequest';

export default (url: string) => {
  const [response, loading, error] = useRequest(
    `http://${
      process.env.NODE_ENV === 'production'
        ? 'api.nas.hapas.io'
        : 'localhost:8080'
    }/seo/?url=${encodeURI(url)}`,
  );
  if (loading) return <div>로딩중...</div>;
  if (error) return <Link href={url}>{url}</Link>;
  if (!response) return null;
  return <SeoPreviewCard data={response.data} />;
};
