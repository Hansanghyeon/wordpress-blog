import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Logs({logs}) {
  if (!logs) return <React.StrictMode></React.StrictMode>;
  return logs.map((log, index) => {
    let version = log[0];
    if (!log[0]) return <React.StrictMode></React.StrictMode>;
    version = version.replace(/[\[|\]]/g, '');
    return <React.StrictMode>
      <div key={`timeline-${index}`} className="grid grid-rows-[auto,auto] md:grid-rows-1 grid-cols-[24px,1fr] md:grid-cols-[100px,24px,1fr] gap-[18px]">
        <div className="font-bold order-2 md:order-first flex gap-[5px]">
          <ReactMarkdown children={log[1]} plugins={[remarkGfm]} />
          <div className='md:hidden'>
            <ReactMarkdown children={log[0]} plugins={[remarkGfm]} />
          </div>
        </div>
        <div id={version} className="order-1 scroll-mt-[calc(var(--topAreaHeight)+20px)] flex flex-col items-center row-span-2 md:row-span-1">
          <a href={`#${version}`} className={`circle w-[24px] h-[24px] rounded-full block relative ${index !== 0 && 'border-4 border-bombay-100 dark:border-[#444c56]'}`}>
          {index === 0 && <i className="icon-back-in-time position-center text-[24px] text-shamrock-500"></i>}
          </a>
          <div className={`bar w-[4px] h-[calc(100%-24px)] rounded-full ${index === 0 ? 'bg-shamrock-500' : 'bg-bombay-100 dark:bg-[#444c56]'}`}></div>
        </div>
        <div className={`order-3 mb-[40px] p-[16px] border rounded-[6px] border-[#d0d7de] dark:border-[#444c56] shadow-sm bg-[color:var(--bg0)]`}>
          <div className="hidden md:block mb-[20px]">
            <ReactMarkdown children={log[0]} plugins={[remarkGfm]} />
          </div>
          <div className="prose prose-sm">
            <ReactMarkdown children={log[2]} plugins={[remarkGfm]} />
          </div>
        </div>
      </div>
    </React.StrictMode>
  })
}

export default function History() {
  const [desc, setDesc] = useState('');
  const [logs, setLogs] = useState(null);

  useEffect(() => {
    if (!logs) fetchChangelog();
  }, [desc, logs]);

  async function fetchChangelog() {
    const CHANGELOG_URL = `https://raw.githubusercontent.com/Hansanghyeon/v8/develop/CHANGELOG.md`;
    let logs = await fetch(CHANGELOG_URL).then(res => res.text());

    /**
     * 로그의 버전별로 나눈다.
     * array[
     *    array[version, date, content]
     * ]
     */
    logs = logs.split('\n## ').map((section, index) => {
      if (index > 0) {
        return section
            .split(/(.*?) ([0-9]{4}-[0-9]{2}-[0-9]{2}?)/)
            .splice(1)
      }
      return section;
    });

    setDesc(logs.splice(0, 1));
    setLogs(logs);
  }

  return (
    <div className="lg:translate-x-[-160px] lg:w-[calc(100%+160px)] group">
      <div className="lg:pl-[160px] mb-[40px] prose">
        <ReactMarkdown children={desc.toString()} plugins={[remarkGfm]} />
      </div>
      <Logs logs={logs} />
    </div>
  )
}

