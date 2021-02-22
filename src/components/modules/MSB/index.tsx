import { useRef } from 'react';
// components
import CategoryList from '@module/list/Category';
// import { MenuStateType } from '@store/Menu';
import useOutsideAlerter from '@hook/useOutsideAlerter';
import useCategory from '@hook/useCategory';
// Style
import { SideBar, Main, Row, Col } from './style';

type MSBProps = {
  isActive?: boolean;
  inFunction?: () => void;
  type?: string;
};
const MSB: React.FC<MSBProps> = ({ isActive, inFunction, type }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter({ ref: isActive && wrapperRef, inFunction });
  const cat = useCategory('dev');
  return (
    <SideBar ref={wrapperRef} isActive={isActive} type={type}>
      <Main>
        <Row>
          <Col col>{cat.data && <CategoryList data={cat.data} />}</Col>
        </Row>
      </Main>
    </SideBar>
  );
};
export default MSB;
