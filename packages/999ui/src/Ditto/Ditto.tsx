import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface DittoProps { }
const Ditto = (props: DittoProps) => {
  return (
    <div css={tw`w-full`} {...props}>
      <div
        css={tw`h-full rounded-[6px] text-gd4`}
        style={{
          boxShadow: '0 22px 24px -28px',
        }}
      ></div>
    </div>
  );
};

export default Ditto;
