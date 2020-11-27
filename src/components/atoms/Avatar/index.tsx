import { Wrap, ImgWrap } from './style';

export default function Avatar({ author }: any) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null;

  return (
    <>
      {author && (
        <Wrap>
          <ImgWrap src={author.avatar.url} alt={name} />
          <div className="text-xl font-bold">{name}</div>
        </Wrap>
      )}
    </>
  );
}
