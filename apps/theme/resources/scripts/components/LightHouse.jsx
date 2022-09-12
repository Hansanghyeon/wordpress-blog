import React, { useState, useEffect, useRef } from 'react';
import lottie from "lottie-web";

function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // cDM, cDU
  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener();
  }, [query]);

  return matches;
}

function BaseHouse({path, play}) {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: path
    });
    return () => lottie.stop();
  }, []);
  return <div style={{
    width: '250px',
    height: '180px',
    overflow: 'hidden',
    borderRadius: '100px 0 0 0',
    position: 'fixed',
    bottom: '0',
    right: '0',
    opacity: '0.5',
    zIndex: '-1',
  }} ref={anime} className={!play && 'hidden'} />;
}
function LightHouse({data}) {
  const mode = useMedia("(prefers-color-scheme: dark)");
  return <>
    <BaseHouse path={data.lottieDark} play={mode} />
    <BaseHouse path={data.lottieLight} play={!mode} />
  </>
}
export default LightHouse;
