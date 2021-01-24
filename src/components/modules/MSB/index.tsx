import { useRef } from 'react';
// components
import CategoryList from '@module/list/Category';
// import { MenuStateType } from '@store/Menu';
import useOutsideAlerter from '@hook/useOutsideAlerter';
import useCategory from '@hook/useCategory';
// Style
import { SideBar, Main, Row, Col } from './style';
// Containers
// import DayAndNightToggle from '#/DayAndNight';
// import PostTypeAllCat from '#/PostTypeAllCat';
// import StaticAllPageList from '#/StaticAllPageList';

const MSB: React.FC<any> = ({ isActive, inFunction, type }: any) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter({ ref: isActive && wrapperRef, inFunction });
  const cat = useCategory('dev');
  return (
    <SideBar ref={wrapperRef} isActive={isActive} type={type}>
      <Main>
        <Row>
          <Col col>
            <div>Category</div>
          </Col>
          <Col col>{cat.data && <CategoryList data={cat.data} />}</Col>
        </Row>
      </Main>
    </SideBar>
  );
};
export default MSB;
