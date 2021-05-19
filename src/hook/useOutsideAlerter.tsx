import { useEffect } from 'react';

/**
 *
 * @param ref 선택요소 외부영역 클릭이벤트를 실행하게할 요소 설정
 * @param inFuction 해당 인자로 받은 함수를 실행시킴
 */
function useOutsideAlerter({ ref, inFunction }: any) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(e: any) {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      inFunction();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

export default useOutsideAlerter;
