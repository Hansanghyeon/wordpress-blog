import { useEffect, useState } from 'react';
import axios from 'axios';

const useRequest = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState(null);

  // 렌더링 될 때, 그리고 url이 바뀔때만 실행됨
  useEffect(() => {
    (async () => {
      setError(null); // 에러 null 처리
      try {
        setLoading(true); // 로딩중
        const res = await axios.get(url); // 실제 요청
        setResponse(res);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    })();
  }, [url]);
  return [response, loading, error];
};

export default useRequest;
