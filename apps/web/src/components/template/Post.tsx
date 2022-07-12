interface PostProps {
  children: React.ReactNode;
  meta: {
    title?: string;
    date: string;
    modified: string;
  }
}
const Post = ({ children, meta }: PostProps) => {
  return (
    <article className="entryContent">
      <header className="bg-[var(--bg1)] px-[calc(var(--paddingX)/2)]">
        <h1 className="mb-[8px] text-[40px] font-bold leading-[1.2]">
          {meta.title}
        </h1>
        <div className="flex">
          <div>{meta.date}</div>
          <div className="px-[8px] opacity-50">
            ( 업데이트: <time className="createDate">{meta.modified}</time> )
          </div>
        </div>
        <p className="mb-4">
          <span>글쓴이: </span>
          <a href="/hansanghyeon/" rel="author">
            한상현
          </a>
        </p>
      </header>
      <main className="mb-[45px] rounded-[6px] border border-[#d0d7de] bg-[color:var(--bg0)] py-[20px] shadow-sm dark:border-[#444c56]">
        <div className="prose">{children}</div>
      </main>
    </article>
  );
};

export default Post;
