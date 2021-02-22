import { useEffect } from 'react';

const Comment = () => {
  useEffect(() => {
    (window as any).replybox = { site: process.env.REPLYBOX };
    if (!document.getElementById('replyboxScript')) {
      const scriptReplybox = document.createElement('script');
      scriptReplybox.id = 'replyboxScript';
      scriptReplybox.src = 'https://cdn.getreplybox.com/js/embed.js';
      document.body.appendChild(scriptReplybox);
    }
  });
  return <div id="replybox"></div>;
};

export default Comment;
