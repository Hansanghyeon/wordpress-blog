import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

function Logs({logs}) {
  if (!logs) return <></>;
  return logs.map((log) => <>
    <ReactMarkdown children={log[0]} plugins={[remarkGfm]} />
    <ReactMarkdown children={log[1]} plugins={[remarkGfm]} />
    <ReactMarkdown children={log[2]} plugins={[remarkGfm]} />
  </>)
}

export default function History() {
  const [desc, setDesc] = useState('');
  const [logs, setLogs] = useState(null);

  useEffect(() => {
    if (!logs) fetchChangelog();
  }, [desc, logs]);

  async function fetchChangelog() {
    const CHANGELOG_URL = 'https://raw.githubusercontent.com/Hansanghyeon/Hansanghyeon/develop/CHANGELOG.md';

    let logs = await fetch(CHANGELOG_URL).then(res => res.text());
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
    <div class="prose prose-sm">
      <ReactMarkdown children={desc.toString()} plugins={[remarkGfm]} />
      <Logs logs={logs} />
    </div>
  )
}

