// components
import BMC from '@atom/button/BMC';
// style
import { RootWrap, Wrap, Profile, Introduce } from './style';

type props = {
  author: {
    name: string;
    description: string;
    avatar: {
      url: string;
    };
  };
};
export default function Author({ author }: props) {
  const { name, avatar, description } = author;
  return (
    <RootWrap>
      <Wrap>
        <Profile>
          <img src={avatar.url} alt={name} />
        </Profile>
        <Introduce>
          Written by&nbsp;
          <strong>{name}</strong>
          <br />
          {description}
        </Introduce>
      </Wrap>
      {author._acf_user_option?.bmc && (
        <BMC url={author._acf_user_option?.bmc} />
      )}
    </RootWrap>
  );
}
